import {
    Curriculum,
    Customer,
    DashBoard,
    HomeManage,
    Management,
    Orders,
    Statistic,
    User
} from "@/components/sidebar/icons";

export const menuItems = [
    {
        id: "1",
        label: "대시보드",
        icon: <DashBoard/>,
        slug:'/'
    },
    {
        id: "2",
        label: "Design",
        icon: <DashBoard/>,
        slug:'/design',
        dropdown: [
            { id: "3", label: "Member and message management design", slug: '/members-and-message-management-design',
                dropdown: [
                    { id: "4", label: "Membership management design", slug: '/membership-management-design',
                        dropdown: [
                            { id: "5", label: "total member management", slug: '/total-member-management' },
                            { id: "6", label: "Administrator Management", slug: '/administrator-management' },
                            { id: "7", label: "organizational-group-management", slug: '/organizational-group-management' },
                            { id: "8", label: "withdrawal-member-management", slug: '/withdrawal-member-management' },
                            { id: "9", label: "activity-log", slug: '/activity-log' },
                            { id: "10", label: "membership-registration-item-settings", slug: '/membership-registration-item-settings' },
                        ]
                    }
                ]
            }
        ],
    },
    {
        id: "11",
        label: "회원 및 메시지 관리",
        icon: <User/>,
        slug:'/members-and-message-management',
        dropdown: [
            { id: "12", label: "회원관리", slug: '/membership-management',
                dropdown: [
                    { id: "13", label: "전체회원관리", slug: '/total-member-management' },
                    { id: "131", label: "관리자 등록", slug: '/administrator-registration' },
                    { id: "132", label: "조직 그룹 관리", slug: '/organizational-group-management' },
                    { id: "133", label: "탈퇴회원 관리", slug: '/withdrawal-member-management' },
                    { id: "134", label: "관리자 유형 관리", slug: '/member-management' },
                    { id: "14", label: "관리자 관리", slug: '/administrator-management' },
                ]
            },

            { id: "19", label: "활동로그", slug: '/activity-log' },
            { id: "20", label: "회원가입항목설정", slug:'/membership-registration-item-settings' },
            { id: "21", label: "회원가입 항목 설정", slug:'/membership-registration-item-settings1' },
        ],
    },
    {
        id: "22",
        label: "콘텐츠관리",
        slug: "/content-management",
        icon: <Management/>
    },
    {
        id: "23",
        label: "커리큘럼관리",
        slug: "/curriculum-management",
        icon: <Curriculum/>
    },
    {
        id: "24",
        label: "주문결제관리",
        slug: "/order-payment-management",
        icon: <Orders/>,
    },
    {
        id: "25",
        label: "홈페이지관리",
        slug: "/homepage-management",
        icon: <HomeManage/>
    },
    {
        id: "26",
        label: "통계관리",
        slug: "/statistics-management",
        icon: <Statistic/>
    },
    {
        id: "27",
        label: "고객센터",
        slug: '/customer-service-center',
        icon: <Customer/>
    },

];
