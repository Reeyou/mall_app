function handleCategoryListData(data) {
    let arr = [];
    data.map(i => {
      if (i.category_id === '0') {
        arr.push(i);
      }
      arr.map((j, j_index) => {
        if (j._id === i.category_id) {
          arr[j_index].hasOwnProperty('children')
            ? ''
            : (arr[j_index].children = []);
          arr[j_index].children.push(i);
        }
        arr[j_index].children &&
          arr[j_index].children.map((d, d_index) => {
            if (d._id === i.category_id) {
              arr[j_index].children[d_index].hasOwnProperty('children')
                ? ''
                : (arr[j_index].children[d_index].children = []);
              arr[j_index].children[d_index].children.push(i);
            }
          });
      });
    });
    return arr;
  }
  
  export {handleCategoryListData};
  