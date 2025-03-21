import {useIntersection} from "stimulus-use";
import {BaseController} from "../../utilities/base_controller";

export class IntersectionController extends BaseController {

  static values = {threshold: String};

  declare readonly isVisible: boolean;
  declare readonly thresholdValue: string;
  declare readonly hasThresholdValue: boolean;

  get _threshold(): number[] {
    if (this.hasThresholdValue) {
      return this.thresholdValue.split(',').map(val => Number.parseFloat(val.trim())).filter(val => val >= 0 && val <= 1);
    } else {
      return [0, 1];
    }
  }

  connect() {
    useIntersection(this, {
      threshold: this._threshold,
      element: this.el,
    });
  }

  appear(entry: IntersectionObserverEntry) {
    this.dispatch(
      this.el,
      "intersection:appear",
      {
        detail: {
          element: this.el,
        },
      },
    );
  };

  disappear(entry: IntersectionObserverEntry) {
    this.dispatch(
      this.el,
      "intersection:disappear",
      {
        detail: {
          element: this.el,
        },
      },
    );
  };

}
