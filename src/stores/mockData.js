const RESTAURANTS = [
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    detail__location: "부산광역시 금정구 구서동 84-15",
    phone: "010-1234-1234",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags2: ["가족외식"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    time: "11:00 ~ 22:00",
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
    menu: [
      {
        food: "굴,과메기삼합",
        price: "68,000",
      },
      {
        food: "점심(모둠특선)",
        price: "21,000",
      },
      {
        food: "누룽지탕",
        price: "10,000",
      },
      {
        food: "녹두전 소",
        price: "7,000",
      },
      {
        food: "녹두전 대",
        price: "12,000",
      },
      {
        food: "된장찌개",
        price: "5,000",
      },
      {
        food: "점심(배비장특선)",
        price: "16,000",
      },
      {
        food: "배비장보쌈(2인) 중",
        price: "37,000",
      },
      {
        food: "배비장보쌈(3인) 대",
        price: "52,000",
      },
      {
        food: "모둠보쌈 2인",
        price: "48,000",
      },
      {
        food: "냉면",
        price: "5,000",
      },
    ],
    pick: {
      nearbyRestaurants: [
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          name: "이시봉족발보쌈",
          same: "87.9%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
          name: "더만족 부산대",
          same: "85.1%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230913083614_photo1_8ae14928509a.jpg",
          name: "가장 맛있는 족발",
          same: "86%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230101164435_photo1_yaYcOTO4voMt.jpg",
          name: "삼다진족 동래역",
          same: "87.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          name: "한양족발 동래",
          same: "85.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20231011062639839_photo_c08d474744cd.jpg",
          name: "봉평막국수 동래",
          same: "85.5%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20200725120455642_photo_a0b494512cec.jpg",
          name: "심미족 동래",
          same: "91.7%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
          name: "남자마늘보쌈",
          same: "94.3%",
        },
      ],
      popularRestaurants: [
        {
          imgLink:
            "https://i.namu.wiki/i/8QIkCOxYp_Vc1sfS4CGlFqt9O4Wh-Zqaj_p4uaCFDfm_6C8y_uJ4NBibDOSxUSgC8vAQ-2REZRpxPjoC9xOO3g.webp",
          name: "이시봉족발보쌈",
          same: "87.9%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
          name: "더만족 부산대",
          same: "85.1%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230913083614_photo1_8ae14928509a.jpg",
          name: "가장 맛있는 족발",
          same: "86%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230101164435_photo1_yaYcOTO4voMt.jpg",
          name: "삼다진족 동래역",
          same: "87.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          name: "한양족발 동래",
          same: "85.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20231011062639839_photo_c08d474744cd.jpg",
          name: "봉평막국수 동래",
          same: "85.5%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20200725120455642_photo_a0b494512cec.jpg",
          name: "심미족 동래",
          same: "91.7%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
          name: "남자마늘보쌈",
          same: "94.3%",
        },
      ],
      sameRestaurants: [
        {
          imgLink:
            "https://i.namu.wiki/i/A5AIHovo1xwuEjs7V8-aKpZCSWY2gN3mZEPR9fymaez_J7ufmI9B7YyDBu6kZy9TC9VWJatXVJZbDjcYLO2S8Q.webp",
          name: "이시봉족발보쌈",
          same: "87.9%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
          name: "더만족 부산대",
          same: "85.1%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230913083614_photo1_8ae14928509a.jpg",
          name: "가장 맛있는 족발",
          same: "86%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230101164435_photo1_yaYcOTO4voMt.jpg",
          name: "삼다진족 동래역",
          same: "87.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          name: "한양족발 동래",
          same: "85.8%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20231011062639839_photo_c08d474744cd.jpg",
          name: "봉평막국수 동래",
          same: "85.5%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20200725120455642_photo_a0b494512cec.jpg",
          name: "심미족 동래",
          same: "91.7%",
        },
        {
          imgLink:
            "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
          name: "남자마늘보쌈",
          same: "94.3%",
        },
      ],
    },
    review: [
      {
        imgLink:
          "https://media.istockphoto.com/id/1458719394/ko/%EC%82%AC%EC%A7%84/%ED%9A%8C%EC%9D%98-%EC%A4%91-%ED%86%A0%EB%A1%A0%EC%9D%84-%EB%93%A3%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%82%AC%EC%97%85%EA%B0%80.jpg?s=1024x1024&w=is&k=20&c=njt5KD5Z2_fYD_E6p5MVEFu0JuDWCyv3YhaAP1zeuB4=",
        name: "나봉이",
        rating: {
          taste: "5",
          price: "5",
          service: "3",
        },
        text: "칼국수 국물의 깊이가 있고 배추보쌈도 고기가 야들야들하니 맛있었어요 보쌈이랑 파전때문에 배부를 것 같아서 셋이서 칼국수 2인만 시켰는데 그릇3개로 나눠서 주셔서 감동이었습니다. 다만 사람이 너무 많아서 바쁘신지 파전이 계속 안나와서 서빙이 안된걸 확인하고 파전은 식은채로 먹어서 아쉬웠습니다.",
        imgLinkList: [
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/20230512095818587_photo_a0b494512cec.jpg",
          },
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/300_300_20191205115314_photo1_e7dbf6690af0.jpg",
          },
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          },
        ],
      },
      {
        imgLink:
          "https://media.istockphoto.com/id/1450340623/ko/%EC%82%AC%EC%A7%84/%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9D%B8-%EC%84%B1%EC%88%99%ED%95%9C-%EC%83%81%EC%82%AC-%EC%95%88%EA%B2%BD%EC%9D%84-%EC%93%B4-%EC%95%84%EC%8B%9C%EC%95%84%EC%9D%B8%EC%9D%98-%EA%B3%A0%EC%9C%84-%EC%82%AC%EC%97%85%EA%B0%80%EA%B0%80-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A5%BC-%EB%B3%B4%EA%B3%A0-%EC%9B%83%EA%B3%A0-%EC%9E%88%EA%B3%A0-%ED%8C%94%EC%A7%B1%EC%9D%84-%EB%81%BC%EA%B3%A0-%ED%98%84%EB%8C%80%EC%A0%81%EC%9D%B8-%EC%82%AC%EB%AC%B4%EC%8B%A4-%EA%B1%B4%EB%AC%BC-%EC%95%88%EC%97%90%EC%84%9C-%EC%9D%BC%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.jpg?s=1024x1024&w=is&k=20&c=m7mrvBElf4_iYagnSDWq0TtdRFaNSWV7HmJ_T771snM=",
        name: "Sebas Kim",
        rating: {
          taste: "5",
          price: "5",
          service: "5",
        },
        text: "여러명이 칼국수 + 보쌈 시키면 칼국수 여러 그릇에 나눠서 주십니다. 예를 들면 4인 가면 칼국수 3인분을 네그릇에 나눠서 주세요. 그래도 양이 많습니다. 보쌈 양은 보통인 것 같고요. 배추가 달고 맛있습니다. 다만 바닥이 기름진 것 처럼 미끄러워서 조심해야할 것 같습니다..",
        imgLinkList: [
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          },
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/20231011062639839_photo_c08d474744cd.jpg",
          },
          {
            imgLink:
              "https://d12zq4w4guyljn.cloudfront.net/20220706091725102_photo_9f0c35fec356.jpg",
          },
        ],
      },
    ],
    blog: [
      {
        title: "을지로 또간집 종로 맛집 노포 느낌 에서 보쌈에 낮술 웨이팅",
        text: "대련집 서울 종로구 종로 16길 37 ⏰월 - 토 11:00 ~ 21:30 브레이크타임 14:30 ~ 17:00 매주 일요일 정기휴무 02-2265-5349 주차 불가능 예전부터 종로맛집 을지로맛집인 #대련집 유명해서 장소 저장해놓고 가보고싶다 생각했었눈데",
        id: "Serong2",
      },
      {
        title:
          "(종로3가) 을지로 찐노포맛집 웨이팅필수 대련집 무생채 보쌈과 칼국수",
        text: "안녕하세요 hee 입니다 오늘은 종로노포맛집 을지로 찐맛집으로 유명한 대련집 다녀왔습니다 웨이팅에 항상 실패했던 곳인데 이번에 다녀오면서 느낌 웨이팅 꿀팁도 알려드릴게용 대련집 웨이팅 꿀팁 ✔️오후 8시쯤",
        id: "hee",
      },
      {
        title:
          "또간집 종로 사골칼국수 생배추보쌈 돼지국밥 우육면 식당 여깁니다!",
        text: "안녕하세요~ 오늘도 또간집 종로편 정리해왔습니다. 종로는 솔직히 2가 3가로 나눠야될거 같을만큼 맛집이 많을거 같은데요. 광장시장도 있고 낙원상가도 있어서 거리가 오래되어서 더 기대됩니다. 그럼 그 중에 어떤 집을",
        id: "톨토라",
      },
    ],
  },
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
  },
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
  },
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
  },
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
  },
  {
    imgLink: "img/restaurantImg.jpg",
    name: "배비장보쌈",
    location: "구서본점",
    distance: "1.7km",
    category: ["보쌈", "보쌈김치"],
    tags: ["가족외식", "무료주차", "배달", "깔끔한"],
    score: 68,
    rating: 4.5,
    gaveRatingPeopleNum: 8,
    favorite: 16,
    lastComment: {
      commenter: "여행조아",
      comment:
        "오랜만에 방문했는데 맛도 그대로고 직원분들이 친절했어요. 맛있게 식사하고 갑니다.",
    },
  },
];

export { RESTAURANTS };
