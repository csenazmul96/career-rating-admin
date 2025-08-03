import { format } from "date-fns";

export function getRatingBtnClass(rating) {
  let className = ''
    if (rating <= 1) {
    className = 'dangerLightSmall';
    } else if (rating === 2) {
    className = 'secondaryLightSmall';
    } else if (rating === 3) {
    className = 'secondarySmall';
    } else if (rating === 4) {
    className = 'primaryLightSmall';
    } else if (rating === 5) {
    className = 'primarySmall';
    }
  return className;
}
export function formatDate(date) {
  if (date) {
    return format(date, "yyyy-MM-dd");
  }
}

export function getSpecificPreviousDate(day) {
  if (day) {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - day);
    return formatDate(sevenDaysAgo);
  }
}

export function generateSearchResult(lists) {
  let result = [];
  return result;
}


export function searchList(list, query) {

}

export function roleDataFormatForReuseOrganizationComponent(roles) {
  let allroles = [];
   return allroles
}

export function getFileExtension(extension) {
  switch (extension) {
    case "application/jpg":
      return "JpgExtensions.png";
    case "image/jpeg":
      return "JpgExtensions.png";
    case "image/ppt":
      return "PptExtensions.png";
    default:
      return "DefaultExtensions.png";
  }
}

export function findDefaultThumbnailIdOfContent(thumbs) {
  if (thumbs.length) {
    let item = thumbs.find((item) => item.isSelected === true);
    if (!item) {
      item = thumbs[0];
    }
    return item.id;
  }
  return "";
}
export function findDefaultThumbnailOfContent(thumbs) {
  if (thumbs.length) {
    let item = thumbs.find((item) => item.isSelected === true);
    if (!item) {
      item = thumbs[0];
    }
    return item;
  }
}
export function formatContentEditPermissionsData(customPermissions) {
 return null
}

export function getFileSize(size) {
  const kSize = size / 1024;

  return "4MB";
}

export function curriculumChapterDateFormat(categories) {

    return [];
}

export function evaluationGroupDataFormat(data) {

    return [];
}

export function generateQuestion(oldList = null) {
  const questions = [];
  return questions;
}


export function getSubtitleLanguages (){
  return [ ];
}