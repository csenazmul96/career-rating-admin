import { format } from "date-fns";
export function getSituationKoreanText(text) {
  if (text === "Active") return "정상";
  else if (text === "InActive") return "탈퇴";
  else if (text === "Stop") return "중지";
  else if (text === "IN_PROGRESS") return "학습중";
  else if (text === "COMPLETE") return "종료";
}

export function generateMemberForm(member = null) {
  return {
    id: member ? member.id : null,
    idNo: member ? member.memberId : "",
    name: member ? member.name : "",
    password: member ? member.password : null,
    confirmPassword: "",
    memberType: "MANAGER",
    email: member ? member?.email : "",
    emailDetails: {
      email: member ? member?.email : "",
      domain: "",
      topDomain: "direct-input",
    },
    contact: {
      first: member?.contact ? member?.contact.first : "",
      middle: member?.contact ? member?.contact.middle : "",
      last: member?.contact ? member?.contact.last : "",
    },
    dob: {
      year: member?.dob ? member?.dob.year : "",
      month: member?.dob ? member?.dob.month : "",
      date: member?.dob ? member?.dob.date : "",
    },
    organizationGroupId: member ? member.organizationGroupId : null,
    organizationGroupName: member ? member.organizationGroupName : null,
    situation: member ? member.situation : "Active",
    consultationHistory: member ? member.consultationHistory : "",
    isDuplicateAllowed: member ? member.isDuplicateAllowed : false,
    duplicateUserCount: member ? member.duplicateUserCount : 1,
    memberRoles: member && member.memberRoles ? member.memberRoles : [],
    memberExists: false,
  };
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
  if (lists.length) {
    lists.forEach((parent) => {
      result.push({
        id: parent.id,
        name: parent.name,
        grpName: parent.name,
        parent: null,
        subOrganizationGroupList: parent.subOrganizationGroupList
          ? parent.subOrganizationGroupList
          : [],
      });
      if (parent.subOrganizationGroupList) {
        let allchilds = parent.subOrganizationGroupList.map((child) => {
          return {
            id: child.id,
            name: child.name,
            grpName: `${parent.name} > ${child.name}`,
            parent: parent,
          };
        });
        result.push(...allchilds);
      }
    });
  }
  return result;
}

export function searchList(list, query) {
  return list
    .map((item) => {
      const isMatch = item.name.toLowerCase().includes(query.toLowerCase());
      const matchedChildren = item.subOrganizationGroupList
        ? searchList(item.subOrganizationGroupList, query)
        : null;

      if (isMatch || (matchedChildren && matchedChildren.length > 0)) {
        return {
          ...item,
          subOrganizationGroupList: matchedChildren,
        };
      }

      return null;
    })
    .filter(Boolean); // Remove null values
}

export function roleDataFormatForReuseOrganizationComponent(roles) {
  let allroles = [];
  if (roles.length) {
    roles.forEach((role) => {
      let parentRole = { ...role, subOrganizationGroupList: [] };
      if (role.members.length) {
        role.members.forEach((member) => {
          parentRole.subOrganizationGroupList.push({
            id: member.id,
            name: member.name,
            memberId: member.memberId,
            parentId: role.id,
            parentOrganizationGroup: {
              id: role.id,
              name: role.name,
            },
          });
        });
      } else {
        parentRole.subOrganizationGroupList = null;
      }
      allroles.push(parentRole);
    });
  }

  return allroles;
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
  if (customPermissions.length) {
    let oldGroups = [];
    let oldPermissions = [];
    customPermissions.forEach((item, i) => {
      if (item.memberPrimaryKey !== null) {
        let parent = oldGroups.find((row) => row.id === item.memberRoleId);
        let permission = {
          id: item.memberPrimaryKey,
          name: item.memberName,
          memberId: item.memberId,
          parentId: item.memberRoleId,
          parentOrganizationGroup: {
            id: item.memberRoleId,
            name: item.memberRoleName,
          },
        };
        if (parent === undefined) {
          oldGroups.push({
            id: item.memberRoleId,
            name: item.memberRoleName,
            parentOrganizationGroup: null,
            subOrganizationGroupList: [permission],
          });
        } else {
          let indexOf = oldGroups.findIndex(
            (row) => row.id === item.memberRoleId
          );
          oldGroups[indexOf].subOrganizationGroupList.push(permission);
        }
        oldPermissions.push({
          id: "" + item.memberPrimaryKey,
          name: item.memberName,
          memberId: item.memberId,
          parentId: item.memberRoleId,
          parentOrganizationGroup: {
            id: item.memberRoleId,
            name: item.memberRoleName,
          },
        });
      }
    });
    if (oldGroups.length) {
      return {
        groups: oldGroups,
        permissions: oldPermissions,
      };
    } else return null;
  } else return null;
}

export function getFileSize(size) {
  const kSize = size / 1024;

  return "4MB";
}

export function curriculumChapterDateFormat(categories) {
  if (categories) {
    return categories.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        sequence: item.sequence,
        subGroups:
          item.subCategories && item.subCategories.length > 0
            ? curriculumChapterDateFormat(item.subCategories)
            : [],
      };
    });
  } else {
    return [];
  }
}

export function evaluationGroupDataFormat(data) {
  if (data) {
    if (Array.isArray(data)) {
      return data.map(evaluationGroupDataFormat);
    } else if (data !== null && typeof data === "object") {
      return Object.keys(data).reduce((acc, key) => {
        const newKey = key === "subGroup" ? "subGroups" : key;
        acc[newKey] = evaluationGroupDataFormat(data[key]);
        return acc;
      }, {});
    }
    return data;
  } else {
    return [];
  }
}

export function generateQuestion(oldList = null) {
  const questions = [];

  if (!oldList) {
    for (let i = 1; i <= 2; i++) {
      questions.push({
        number: i,
        title: "",
        label: `${i}번 문항`,
        questionFileId: "",
        fileName: "",
        questionPrompt: "",
        point: "",
        answers: [
          {
            number: 1,
            option: "",
            isCorrectAnswer: true,
            answerFileId: "",
            fileName: "",
          },
          {
            number: 2,
            option: "",
            isCorrectAnswer: false,
            answerFileId: "",
            fileName: "",
          },
        ],
      });
    }
  } else {
    oldList.forEach((item, i) => {
      questions.push({
        id: item.id,
        number: i + 1,
        title: item.title,
        label: `${i + 1}번 문항`,
        questionFileId: item.questionFileId,
        fileName: item.questionFileUrl,
        questionPrompt: item.questionPrompt,
        point: item.point,
        answers: item.answers.map((answer, j) => ({
          number: j + 1,
          option: answer.option,
          isCorrectAnswer: answer.isCorrectAnswer,
          answerFileId: answer.answerFileId,
          fileName: answer.fileName,
        })),
      });
    });
  }
  return questions;
}


export function getSubtitleLanguages (){
  return [
    { id: "en", name: "영어 (English)" },
    { id: "es", name: "스페인어 (Español)" },
    { id: "fr", name: "프랑스어 (French)" },
    { id: "de", name: "독일어 (German)" },
    { id: "pt", name: "포르투갈어 (Portuguese)" },
    { id: "zh", name: "중국어 (Chinese)" },
    { id: "ar", name: "아랍어 (Arabic)" },
    { id: "hi", name: "힌디어 (Hindi)" },
    { id: "ru", name: "러시아어 (Russian)" },
    { id: "ko", name: "한국어 (Korean)" }
  ];
}