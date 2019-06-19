const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const GeoSchema=new Schema({
//   type:{
//     type:String,
//     default:"Point"
//   },
//   coordinates:{
//     type:[Number],
//     index:"2dsphere"
//   }
// });
const NinjaSchema = new Schema({
  name:{
      type: String,
      required:[true,'Name field is required']
    },
  price:{
    type:String
  },
  duration:{
    type:String,
  },
  rating:{
    type:Number
  },
  type:{
    type:String
  },
  available:{
    type:[Number]
  },
  image:{
    type:String
  }
});

const Ninja = mongoose.model('ninja',NinjaSchema);
module.exports=Ninja;
