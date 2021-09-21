
export const exampleTaskData = [
    {
        'id': 1,
        'title': 'Preparation for Klingon Peace Talks',
        'orderId': 0,
        'start': new Date('2014-06-02T00:00:00.000Z'),
        'end': new Date('2014-07-12T00:00:00.000Z'),
        'percentComplete': 0.45708333333333334,
        'isExpanded': true,
        'children': [
            {
                'id': 2,
                'title': 'Ambassador Arrival',
                'orderId': 1,
                'start': new Date('2014-06-02T00:00:00.000Z'),
                'end': new Date('2014-06-07T00:00:00.000Z'),
                'percentComplete': 0.5766666666666667,
                'isExpanded': true,
                'children': [
                    {
                        'title': 'Reprogram Replicators with Klingon Recipes',
                        'orderId': 0,
                        'start': new Date('2014-06-02T00:00:00.000Z'),
                        'end': new Date('2014-06-04T00:00:00.000Z'),
                        'percentComplete': 0.25,
                        'isExpanded': true
                    }, {
                        'id': 20,
                        'title': 'Reinforce Furniture',
                        'orderId': 1,
                        'start': new Date('2014-06-02T00:00:00.000Z'),
                        'end': new Date('2014-06-03T02:00:00.000Z'),
                        'percentComplete': 0.82,
                        'isExpanded': true
                    }, {
                        'id': 39,
                        'title': 'Approve Guest Holodeck Access',
                        'orderId': 2,
                        'start': new Date('2014-06-04T00:00:00.000Z'),
                        'end': new Date('2014-06-07T00:00:00.000Z'),
                        'percentComplete': 0.66,
                        'isExpanded': true
                    }
                ]
            }, {
                'id': 12,
                'title': 'Research Local Customs',
                'orderId': 2,
                'start': new Date('2014-06-09T00:00:00.000Z'),
                'end': new Date('2014-06-14T00:00:00.000Z'),
                'percentComplete': 0.6,
                'isExpanded': true,
                'children': [
                    {
                        'id': 22,
                        'title': 'History of Klingon Empire',
                        'orderId': 0,
                        'start': new Date('2014-06-09T00:00:00.000Z'),
                        'end': new Date('2014-06-11T00:00:00.000Z'),
                        'percentComplete': 0.56,
                        'isExpanded': true
                    }, {
                        'id': 23,
                        'title': 'Notable Conflicts and Individuals',
                        'orderId': 1,
                        'start': new Date('2014-06-11T00:00:00.000Z'),
                        'end': new Date('2014-06-14T00:00:00.000Z'),
                        'percentComplete': 0.64,
                        'isExpanded': true
                    },
                    {
                        'id': 23,
                        'title': 'Learn Basic Greetings',
                        'orderId': 1,
                        'start': new Date('2014-06-11T00:00:00.000Z'),
                        'end': new Date('2014-06-14T00:00:00.000Z'),
                        'percentComplete': 0.64,
                        'isExpanded': true
                    }
                ]
            }, {
                'id': 13,
                'title': 'Welcome Dinner Preparation',
                'orderId': 3,
                'start': new Date('2014-06-11T00:00:00.000Z'),
                'end': new Date('2014-07-02T00:00:00.000Z'),
                'percentComplete': 0.77,
                'isExpanded': true,
                'children': [
                    {
                        'id': 24,
                        'title': 'Create Menu',
                        'orderId': 0,
                        'start': new Date('2014-06-11T00:00:00.000Z'),
                        'end': new Date('2014-06-17T00:00:00.000Z'),
                        'percentComplete': 0.77,
                        'isExpanded': true
                    }, {
                        'id': 26,
                        'title': 'Rehearse Klingon Opera',
                        'orderId': 1,
                        'start': new Date('2014-06-17T00:00:00.000Z'),
                        'end': new Date('2014-06-18T00:00:00.000Z'),
                        'percentComplete': 0.82,
                        'isExpanded': true
                    }, {
                        'id': 27,
                        'title': 'Tea Ceremony Antidote',
                        'orderId': 2,
                        'start': new Date('2014-06-18T00:00:00.000Z'),
                        'end': new Date('2014-06-24T00:00:00.000Z'),
                        'percentComplete': 0.5,
                        'isExpanded': true
                    },
                ]
            },  
        ]
    }
];

export const exampleDependencyData = [
    {
        'id': 528,
        'fromId': 18,
        'toId': 19,
        'type': 1
    }, {
        'id': 533,
        'fromId': 22,
        'toId': 23,
        'type': 1
    }, {
        'id': 534,
        'fromId': 23,
        'toId': 24,
        'type': 1
    }, {
        'id': 535,
        'fromId': 24,
        'toId': 26,
        'type': 1
    }, {
        'id': 536,
        'fromId': 26,
        'toId': 27,
        'type': 1
    },
    {
        'id': 537,
        'fromId': 26,
        'toId': 28,
        'type': 1
    },
    {
        'id': 538,
        'fromId': 27,
        'toId': 29,
        'type': 1
    },
    {
        'id': 539,
        'fromId': 28,
        'toId': 29,
        'type': 0
    }, {
        'id': 540,
        'fromId': 29,
        'toId': 32,
        'type': 1
    }, {
        'id': 541,
        'fromId': 29,
        'toId': 33,
        'type': 1
    }, {
        'id': 543,
        'fromId': 29,
        'toId': 36,
        'type': 1
    },
    {
        'id': 551,
        'fromId': 13,
        'toId': 29,
        'type': 0
    },
    {
        'id': 544,
        'fromId': 34,
        'toId': 35,
        'type': 1
    }, {
        'id': 545,
        'fromId': 32,
        'toId': 33,
        'type': 0
    }, {
        'id': 546,
        'fromId': 33,
        'toId': 17,
        'type': 1
    }, {
        'id': 547,
        'fromId': 35,
        'toId': 17,
        'type': 1
    }, {
        'id': 548,
        'fromId': 38,
        'toId': 17,
        'type': 1
    }, {
        'id': 549,
        'fromId': 36,
        'toId': 37,
        'type': 1
    }, {
        'id': 550,
        'fromId': 37,
        'toId': 38,
        'type': 1
    },
    {
        'id': 553,
        'fromId': 18,
        'toId': 20,
        'type': 1
    }, {
        'id': 554,
        'fromId': 20,
        'toId': 39,
        'type': 1
    }, {
        'id': 555,
        'fromId': 19,
        'toId': 39,
        'type': 1
    },
    {
        'id': 556,
        'fromId': 39,
        'toId': 22,
        'type': 1
    },
    {
        'id': 888,
        'fromId': 29,
        'toId': 28,
        'type': 3
    },
    {
        'id': 777,
        'fromId': 7,
        'toId': 11,
        'type': 2
    }
];
