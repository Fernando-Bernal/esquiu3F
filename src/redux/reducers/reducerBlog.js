const initialState = {
    blog: [
        {
            id: 1,
            title: 'Blog Title 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et risus ac quam placerat hendrerit. Nullam euismod, erat vitae aliquet tincidunt, nunc velit interdum velit, vel ultricies nunc dolor ut est. Nulla facilisi. Nulla facilisi. Donec sit amet nisl at tortor luctus elementum. Nulla facilisi. Nulla facilisi. Donec sit amet nisl at tortor luctus elementum. Nulla facilisi. Nulla facilisi. Donec sit amet nisl at tortor luctus elementum.',

        },
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }
  
  export default reducer