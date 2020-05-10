
export function UnsubscribeAndDisableBackground(constructor) {
  const onInit = constructor.prototype.ngOnInit;
  const onDestroy = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnInit = function () {
    this._data.disableBackground.next(true);

    if (onInit && typeof onInit === 'function') { onInit.apply(this, arguments); }
  };

  constructor.prototype.ngOnDestroy = function () {
    this.subscriptions.forEach(sub => sub.unsubscribe());

    if (onDestroy && typeof onDestroy === 'function') { onDestroy.apply(this, arguments); }
  };
}
