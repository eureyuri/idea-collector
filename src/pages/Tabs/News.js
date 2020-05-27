import React from 'react';
import {
  IonPage, IonContent, IonItem, IonRow, IonLabel, IonThumbnail, IonImg
} from '@ionic/react';
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargerHeader";
import LinkList from "../../components/Link/LinkList";

const News = (props) => {
  return (
    <IonPage>
      <SmallHeader title="New"/>
      <IonContent fullscreen>
        <LargeHeader title="New"/>
        <div class="container">
          <div class="cover"></div>
          <div class="text-block">
            <h4>ツレアムアイディア募集広場</h4>
            <p>YouTubeで見たい動画の内容を投稿してください</p>
            <p>Upvoteの多さやコメントで動画制作の優先度を考えます</p>
            <p>プロトタイプやけど、今後更新する予定なし！</p>
          </div>
        </div>
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default News;
