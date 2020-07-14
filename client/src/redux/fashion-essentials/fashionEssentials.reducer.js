import shirts from '../../img/shirts.jpg';
import t_shirts from '../../img/t-shirts.jpg';
import hats from '../../img/hats.jpg';
import trousers from '../../img/trousers.jpg';
import footwear from '../../img/footwear.jpg';
import suits from '../../img/suits.jpg';

const INITIAL_STATE = {
    sections: [
        {
            title: 'shirts',
            id: 1,
            imgUrl: shirts,
            color: '#7158e2',
            linkUrl: ''
          },
          {
            title: 't-shirts',
            id: 2,
            imgUrl: t_shirts,
            color: '#5a0000',
            linkUrl: ''
          },
          {
            title: 'trousers',
            id: 3,
            imgUrl: trousers,
            color: '#160000',
            linkUrl: ''
          },
          {
            title: 'footwear',
            id: 4,
            imgUrl: footwear,
            color: '#3c0955',
            linkUrl: ''
          },
          {
            title: 'suits',
            id: 5,
            imgUrl: suits,
            color: '#101010',
            linkUrl: ''
          },
          {
              title: 'hats',
              id: 6,
              imgUrl: hats,
              color: '#0a471f',
              linkUrl: 'hats'
          }
    ]
};

const essentialsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default essentialsReducer;