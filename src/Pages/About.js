import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Button } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";


const About = () => {
const [pics, setPics] = useState([]);


useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
        .then((res) => res.json())
        .then((data) => setPics(data.results))
        .catch((error) => console.log('no Pokemons want to fight today!'))
  }, []);

  const styles = {
    card: {
      maxWidth: 200,
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    },
    media: {
      height: 15,
      paddingTop: "56.25%" // 16:9
    }
  };



return(

    <>
    {pics && pics.map((pic) =>{
        return (
    <div>
         <Card raised={true}>
            <CardMedia
                    style={styles.media}
                    image='https://i.pinimg.com/originals/ee/e7/5d/eee75d6e875e7e205a1394aaa96fad12.png'
            />
                <CardContent>
                    <Typography variant="headline" component="h3">
                        our names
                    </Typography>
                    <Typography>
                        add some stuff about ussss
                    </Typography>
                </CardContent>
              
         </Card>
    </div>
        )
    })

    }
    </>

    )
};

export default About;