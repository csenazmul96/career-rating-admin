import {
    Folder
} from "@/app/(root-layout)/(main)/design/content-management-design/video-management/chapter/components/icons";


export const chapterData = [
    {
        id: "1",
        label: "전체보기",
        icon: <Folder/>,
        slug:'/'
    },
    {
        id: "2",
        label: "PHP 강의",
        icon: <Folder/>,
        slug:'/'
    },

    {
        id: "11",
        label: "회원 및 메시지 관리",
        icon: <Folder/>,
        slug:'/members-and-message-management',
        dropdown: [
            { id: "12", label: "회원관리", slug: '/membership-management',
                dropdown: [
                    { id: "13", label: "전체회원관리", slug: '/total-member-management' },
                    { id: "14", label: "관리자 관리", slug: '/administrator-management' },
                    { id: "132", label: "조직 그룹 관리", slug: '/organizational-group-management' },
                    { id: "133", label: "탈퇴회원 관리", slug: '/withdrawal-member-management' },

                    { id: "15", label: "회원가입 항목 설정", slug: '/member-registration-settings' },
                    { id: "16", label: "마케팅정보수신동의관리", slug: '/administration-logs/signin-logs' },
                ]
            },

            // { id: "19", label: "활동로그", slug: '/activity-log' },
            // { id: "20", label: "회원가입항목설정", slug:'/membership-registration-item-settings' },
            // { id: "21", label: "회원가입 항목 설정", slug:'/membership-registration-item-settings1' },
        ],
    },
];
