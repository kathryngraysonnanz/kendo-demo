export const data = {
  nodes: [{
    id: 'lifesupport',
    label: {
      text: 'Life Support (58%)'
    }
  }, {
    id: 'ship',
    label: {
      text: 'Ship Tech (42%)'
    }
  }, {
    id: 'holodecks',
    label: {
      text: 'Holodecks (12%)'
    }
  }, {
    id: 'replicators',
    label: {
      text: 'Replicators (40%)'
    }
  }, {
    id: 'personal',
    label: {
      text: 'Personal Quarters (48%)'
    }
  }, {
    id: 'quarks',
    label: {
      text: 'Quarks Bar (8%)'
    }
  }, {
    id: 'kitchen',
    label: {
      text: 'Food Service (35%)'
    }
  }, {
    id: 'temp',
    label: {
      text: 'Temperature Controls (38%)'
    }
  }, {
    id: 'computers',
    label: {
      text: 'Computers (Entertainment) (19%)'
    }
  }],
  links: [{
    sourceId: 'lifesupport',
    targetId: 'holodecks',
    value: 12
  }, {
    sourceId: 'lifesupport',
    targetId: 'replicators',
    value: 14
  }, {
    sourceId: 'lifesupport',
    targetId: 'personal',
    value: 32
  }, {
    sourceId: 'ship',
    targetId: 'replicators',
    value: 26
  }, {
    sourceId: 'ship',
    targetId: 'personal',
    value: 16
  }, {
    sourceId: 'holodecks',
    targetId: 'quarks',
    value: 4
  }, {
    sourceId: 'holodecks',
    targetId: 'computers',
    value: 8
  }, {
    sourceId: 'replicators',
    targetId: 'quarks',
    value: 4
  }, {
    sourceId: 'replicators',
    targetId: 'kitchen',
    value: 24
  }, {
    sourceId: 'replicators',
    targetId: 'temp',
    value: 10
  }, {
    sourceId: 'replicators',
    targetId: 'computers',
    value: 2
  }, {
    sourceId: 'personal',
    targetId: 'kitchen',
    value: 11
  }, {
    sourceId: 'personal',
    targetId: 'temp',
    value: 28
  }, {
    sourceId: 'personal',
    targetId: 'computers',
    value: 9
  }]
};