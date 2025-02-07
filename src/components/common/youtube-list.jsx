import { Container } from "./Container";
import { Card } from "./yotube-card";

export const List = () => {
    const videos = [
      {
        thumbnail: "/asset/imgs/1-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Doğu Karadeniz Dağlarında Bisikletle Geziyoruz #100",
        channel: "Yiğit Can İç",
        views: "27K",
        time: "1 day ago",
      },
      {
        thumbnail: "/asset/imgs/2-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Her Derde Deva: CSS Flexbox",
        channel: "Adem İlter",
        views: "16K",
        time: "2 years ago",
      },
      {
        thumbnail: "/asset/imgs/3-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "SAFRAN - Altın Kadar Değerli",
        channel: "Coşkun Aral Anlatıyor",
        views: "26K",
        time: "1 week ago",
      },
      {
        thumbnail: "/asset/imgs/4-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Product Showcase: SparkFun MicroMod Ecosystem",
        channel: "SparkFun Electronics",
        views: "2.3K",
        time: "1 week ago",
      },
      {
        thumbnail: "/asset/imgs/5-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "SAVOTTA JÄÄKÄRI L SIRT ÇANTASI VE SAVOTTA...",
        channel: "yener ustun",
        views: "1K",
        time: "1 month ago",
      },
      {
        thumbnail: "/asset/imgs/6-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "£940,000 Yacht Your: Princess F50",
        channel: "AQUAHOLIC",
        views: "49K",
        time: "3 weeks ago",
      },
      {
        thumbnail: "/asset/imgs/7-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Alev Tahta Kurusu - Pyrrhocoris Apterus",
        channel: "Ibrahim Sargın",
        views: "5.8K",
        time: "2 weeks ago",
      },
      {
        thumbnail: "/asset/imgs/8-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "iPad Air - Kutu Açılışı ve İlk İzlenimler (4. Nesil)",
        channel: "iPhoneDo Turkey",
        views: "108K",
        time: "5 days ago",
      },
      {
        thumbnail: "/asset/imgs/10-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Konusanlar 9. Bölüm Ekstralar",
        channel: "AQUAHOLIC",
        views: "49K",
        time: "3 weeks ago",
      },
      {
        thumbnail: "/public/asset/imgs/12-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Ben Bu Dudu Aykız",
        channel: "AQUAHOLIC",
        views: "49K",
        time: "3 weeks ago",
      },
      {
        thumbnail: "/asset/imgs/13-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Illustrator 2021",
        channel: "AQUAHOLIC",
        views: "49K",
        time: "3 weeks ago",
      },
      {
        thumbnail: "/asset/imgs/14-rasim.png",
        avatar: "/asset/imgs/avatar.png",
        title: "Illustrator 2021",
        channel: "AQUAHOLIC",
        views: "49K",
        time: "3 weeks ago",
      }
    ];
  
    return (
        <>
        <Container>
      <div className=" grid grid-cols-4 p-30">
        {videos.map((video, index) => (
          <Card key={index} video={video} />
        ))}
      </div>
        </Container>
        </>
    );
};