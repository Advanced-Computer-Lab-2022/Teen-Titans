const UploadVideo=()=>{
    const [video, setVideo] = useState('')




return (
    //create a form 
    <form className="create" onSubmit={handleSubmit}>
     

      <label> Upload video:</label>
      <input type="text"
        onChange={(e) => setVideo(e.target.value)}
        value={video}
      />

      <button>Upload</button>
      {error && <div className="error">{error}</div>}
    </form>

  )

}

  export default UploadVideo;
