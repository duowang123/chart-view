const dragApi = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1',
            cascaderConfig: {
              options: [
                {
                  value: 'zhinan',
                  label: '指南1-1-1',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则'
                    }
                  ]
                }
              ]
            }
          },
          {
            id: 10,
            label: '三级 1-1-2',
            cascaderConfig: {
              options: [
                {
                  value: 'zhinan',
                  label: '指南1-1-2',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则'
                    }
                  ]
                }
              ]
            }
          },
          {
            id: 11,
            label: '三级 1-1-3',
            cascaderConfig: {
              options: [
                {
                  value: 'zhinan',
                  label: '指南 1-1-3',
                  children: [
                    {
                      value: 'shejiyuanze',
                      label: '设计原则'
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
]

export default dragApi
