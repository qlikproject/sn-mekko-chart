import cells from '../cells';

describe('cells', () => {
  const param = {
    context: {
      permissions: [],
    },
    hc: {
      qDimensionInfo: [{}, {}],
    },
  };

  it('should contain empty brush config when neither select nor interact permissions are allowed', () => {
    const c = cells(param);
    expect(c[0].brush).to.eql({});
  });

  it('should not have any brush trigger when dimension is locked', () => {
    const c = cells({
      ...param,
      context: { permissions: ['select', 'interact'] },
      hc: { qDimensionInfo: [{}, { qLocked: true }] },
    });
    expect(c[0].brush.trigger).to.eql([]);
  });
});
