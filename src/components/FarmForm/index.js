import React, {useState, useEffect} from 'react'

function FarmForm({onSubmit}){
    
    const [fazenda, setFazenda] = useState("");
    const [bio, setBio] = useState("");
    const [cultivos, setCultivos] = useState("");
    const [avatar_url, setAvatar_url] = useState("");
  
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        );
      }, []);


      async function handleSubmit(e){

        e.preventDefault()

          await onSubmit({
            fazenda,
            bio,
            cultivos,
            avatar_url,
            latitude,
            longitude,
          })

          setFazenda("");
          setBio("");
          setCultivos("");
          setAvatar_url("");
      
          alert("Cadastro efetuado com sucesso");
      }


    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="fazenda">Nome da Fazenda</label>
          <input
            name="fazenda"
            id="fazenda"
            required
            value={fazenda}
            onChange={(e) => setFazenda(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="bio">Biografia Fazenda</label>
          <input
            name="bio"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="cultivos">Cultivares da fazenda</label>
          <input
            name="cultivos"
            id="cultivos"
            value={cultivos}
            onChange={(e) => setCultivos(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="avatar_url">Foto da fazenda(URL)</label>
          <input
            name="avatar_url"
            id="avatar_url"
            value={avatar_url}
            onChange={(e) => setAvatar_url(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    )
}

export default FarmForm