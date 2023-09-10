// import Comment from "./Comment"
import Commentlist from "./Commentlist"
const Commentcontainer=()=>{
 const commentData=[
   {
      name:'Ted Mosby',
      text: "Lorem ipsum culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
      replies:[],
   },
   {
      name:'Tracy',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae, amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
      replies:[   {
         name:'Harsh Dixit',
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
         replies:[   {
            name:'Harshssssssssssssss',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
            replies:[   {
               name:'Harsh Dixit',
               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
               replies:[],
            }],
         }],
      }, {
         name:'Harsh Dixit',
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
         replies:[   {
            name:'Harshssssssssssssss',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
            replies:[   {
               name:'Harsh Dixit',
               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
               replies:[],
            }],
         }],
      }],
   },
   {
      name:'Harsh Dixit',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
      replies:[   {
         name:'Harsh Dixit',
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
         replies:[   {
            name:'Harsh Dixit',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
            replies:[],
         },   {
            name:'Harsh Dixit',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
            replies:[],
         }],
      }],
   },
   {
      name:'Uncle Barney',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea consectetur ipsuconsequuntur enim, repudiandae magni error repellendus mollitia eligendi aspernatur id vitae nulla suscipit optio culpa et excepturi fugit?Quis ut delectus deserunt aperiam qui veniam harum accusamus quibusdam exercitationem neque repellendus quidem ea illo molestiae quas porro, voluptate dolores natus sequi hic nam ducimus molestias aut! Odio, ab!",
      replies:[],
   },
 ]
      // return <div className="ml-10">  
      //       <h1 className="mb-10 font-bold text-3xl">Comments:-</h1>
      //  {
      //       commentData.map((data)=> <Comment data={data}/>)    
      // }
      // </div>
      return <div>
         <Commentlist data={commentData}/>
      </div>
   }
export default Commentcontainer

