import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';

const Events = (props: any) => {
    if(props.events.available > 0){
        return(
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Events</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.events.items?.map((item: any, index: any) => {
                            return(
                                <IonItem key={index}>
                                    <p>{item.name}</p>
                                </IonItem>
                            )
                        })
                    }
                </IonCardContent>
            </IonCard>
        );

    } else {
        return <></>
    }
};

export default Events;
