import Filebase  from 'react-file-base64';
import {useState} from 'react'
const Form = () => {
    const [postdata,setpostdata] = useState({creator:'', title : '', tags:'', message:'', sendfile:''});
    return (
        <div className="Form">
            <form>
                <h1>Create new memories </h1>
                <br/>
                <div className="form-group p-2">
                    <label htmlFor="" class="w-100">Enter name of the creator </label>
                    <input type="text" name="creator" class="form-control w-100" value={postdata.creator} onChange={(e)=> setpostdata({...postdata, creator: e.target.value})} />
                </div>
                <div class="form-group p-2">
                    <label htmlFor="" class="w-100"> Enter the title </label>
                    <input type="text" name="title" id="" class="form-group w-100" value={postdata.title} onChange={(e)=> setpostdata({...postdata, title: e.target.value})}/>
                </div>
                <div class="form-group p-2">
                    <label htmlFor="" class="w-100">Enter the message</label>
                    <textarea class="form-control w-100"  rows="3" value={postdata.message} onChange={(e)=>setpostdata({...postdata, message: e.target.value})}></textarea>
    
                </div>
                <div class="form-group p-2">
                    <label class="w-100">Enter the tag </label>
                    <input type="text" name=""  class="form-control" id="" value={postdata.tags} onChange={(e)=> setpostdata({...postdata, tag: tag})} />;
                </div>
                <div class="form-group p-2">
                    <label class="w-100">Select file </label>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                  </div>
                <div class="form-group p-2">
                    <button type="submit" class="w-100 btn btn-primary">Submit </button>
                </div>
            </form>
            
        </div>
    )

}
export default Form;