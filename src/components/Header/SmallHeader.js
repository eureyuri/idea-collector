import React from "react";
import {
  IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol
} from '@ionic/react';

const LargeHeader = ({title}) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTitle size="large">{title}</IonTitle>
            </IonCol>
            <IonCol text-center>
              <div class="title">
                <IonTitle size="large" text-right>
                  <a href="https://www.youtube.com/channel/UCOScmlJ9J2xpLwuOYQu4n9Q" target="_blank">
                  ツレアム　
                  <i class="fa fa-youtube-play"></i>
                  </a>
                </IonTitle>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default LargeHeader;
