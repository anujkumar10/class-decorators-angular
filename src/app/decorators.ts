
export function UnsubscribeAndDisableBackground(constructor) {
  const onInit = constructor.prototype.ngOnInit;
  const onDestroy = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnInit = function () {
    this._data.disableBackground.next(true);

    onInit.apply(this, arguments);
  };

  constructor.prototype.ngOnDestroy = function () {
    this.subscriptions.forEach(sub => sub.unsubscribe());

    onDestroy.apply(this, arguments);
  };
}
