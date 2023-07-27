const categoryToKo = (category) => {
  switch(category){
    case "society":
      return "사회";
    case "politics":
      return "정치";
    case "economic":
      return "경제";
    case "foreign":
      return "해외";
    case "culture":
      return "문화";
    case "entertain":
      return "연예";
    case "sports":
      return "스포츠";
    case "digital":
      return "테크";
  }
}

export default categoryToKo;