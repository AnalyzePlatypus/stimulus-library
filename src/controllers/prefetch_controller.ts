import {BaseController} from "../utilities/base_controller";

export class PrefetchController extends BaseController {

  static values = {mode: String};

  declare readonly modeValue: "intersect" | "mouseover";
  declare readonly hasModeValue: boolean;

  get _mode(): string {
    return this.hasModeValue ? this.modeValue : "mouseover";
  }

  get _supportsPrefetch(): boolean {
    const link: HTMLLinkElement = document.createElement('link');
    return link.relList?.supports && link.relList?.supports('prefetch');
  }

  get _href(): string {
    return (this.el as HTMLAnchorElement).href;
  }

  get _existingPrefetch(): boolean {
    return (document.head.querySelectorAll(`link[rel="prefetch"][href="${this._href}"]`) || []).length > 0;
  }

  get _connectionSuitable(): boolean {
    // @ts-ignore
    const connection = navigator.connection;

    // no way to know what network state is. Allow prefetching
    if (!connection) {
      return true;
    }

    // Don't prefetch if network conditions are poor or user has enabled data-saving mode
    if (connection) {
      if (connection.saveData) {
        this.warn('Data Saving is enabled');
        return false;
      }

      if (/2g/.test(connection.effectiveType)) {
        this.warn("Network is too slow");
        return false;
      }
    }
    return true;
  }

  initialize(): void {
    this.prefetch = this.prefetch.bind(this);
  }

  connect(): void {
    if (!this._supportsPrefetch) {
      return;
    }

    switch (this._mode) {
      case "intersect":
        this._setupObserver();
        break;
      case "mouseover":
        this.el.addEventListener("mouseover", this.prefetch, {once: true});
        break;
      default:
        throw new Error(`'${this._mode}' is not a supported prefetch mode`);
    }
  }

  disconnect() {
    this.el.removeEventListener("mouseover", this.prefetch);
  }

  _setupObserver(): void {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        if (entry.isIntersecting) {
          this.prefetch();
          observer.unobserve(entry.target);
        }
      },
    );
    observer.observe(this.element);
  }

  prefetch() {
    if (this._existingPrefetch || !this._connectionSuitable) {
      return;
    }
    const link: HTMLLinkElement = document.createElement('link');
    Object.assign(link, {rel: 'prefetch', href: this._href, as: 'document'});
    document.head.appendChild(link);
  }

}
