import { IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from 'react-router';
import Comics from '../../components/Comics/Comics';
import Events from '../../components/Events/Events';
import Series from '../../components/Series/Series';
import Stories from '../../components/Stories/Stories';

const SingleCharacter: React.FC = () => {

    const [character, setCharacter] = useState<any>([]);
    const id = useParams<{ id: any; }>();
  
    useEffect(() => {
        axios
            .get("https://gateway.marvel.com/v1/public/characters/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
            .then(response => {
                setCharacter(response.data.data.results)
            })
    }, [id])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Character</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                        character?.map((character: any, index: any) => {
                            return(
                                <div key={index}>
                                    <IonCard>
                                        <img alt="" src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                                        <IonCardHeader>
                                            <IonCardTitle>{character.name}</IonCardTitle>
                                        </IonCardHeader>

                                        {
                                            character.urls?.map((url: any, index: any) => {
                                                return(
                                                    <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                                )
                                            })
                                        }
                                    </IonCard>
                                    <Comics comics={character.comics} />
                                    <Events events={character.events} />
                                    <Series series={character.series} />
                                    <Stories stories={character.stories} />
                                </div>
                            )
                        })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SingleCharacter;
