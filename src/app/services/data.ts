export const connections = [
    {
        userId: 'u1',
        name: 'user 1'
    }, {
        userId: 'u2',
        name: 'user 2'
    }
];

export const data = [
  {
    id: 'db1',
    name: 'db 1',
    permissions: ['u1', 'u2'],
    children: [
      {
        id: 's1',
        name: 'schema 1',
        permissions: ['u1', 'u2'],
        children: [
          {
            id: 't1',
            name: 'table 1',
            permissions: ['u1'],
            children: [
              {
                id: 'c1',
                name: 'column 1',
              }
            ]
          },
          {
            id: 't2',
            name: 'table 2',
            permissions: ['u1', 'u2'],
            children: [
              {
                id: 'c2',
                name: 'column 1',
              }
            ]
          }
        ]
      },
      {
        id: 's2',
        name: 'schema 2',
        permissions: ['u1', 'u2'],
        children: [
          {
            id: 't3',
            name: 'table 1',
            permissions: ['u1', 'u2'],
            children: [
              {
                id: 'c3',
                name: 'column 1',
              }
            ]
          }
        ]
      },
      {
        id: 's3',
        name: 'schema 3',
        permissions: ['u2'],
        children: [
          {
            id: 't4',
            name: 'table 1',
            permissions: ['u1', 'u2'],
            children: [
              {
                id: 'c4',
                name: 'column 1',
              }
            ]
          },
          {
            id: 't5',
            name: 'table 2',
            permissions: ['u2'],
            children: [
              {
                id: 'c5',
                name: 'column 1',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'db2',
    name: 'db 2',
    permissions: ['u1', 'u2'],
    children: [
      {
        id: 's4',
        name: 'schema 1',
        permissions: ['u1'],
        children: [
          {
            id: 't5',
            name: 'table 1',
            permissions: ['u1'],
            children: [
              {
                id: 'c6',
                name: 'column 1',
              }
            ]
          },
          {
            id: 't6',
            name: 'table 2',
            permissions: ['u1'],
            children: [
              {
                id: 'c7',
                name: 'column 1',
              }
            ]
          }
        ]
      },
      {
        id: 's5',
        name: 'schema 2',
        permissions: ['u1', 'u2'],
        children: [
          {
            id: 't6',
            name: 'table 1',
            permissions: ['u2'],
            children: [
              {
                id: 'c8',
                name: 'column 1',
              }
            ]
          }
        ]
      }
    ]
  }
]
