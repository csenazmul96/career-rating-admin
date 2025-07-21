export function allPathList() {
    return [
        {
            path: "/members-and-message-management/membership-management/total-member-management",
            permissions: [
                "membership_management",
                "total_member_management",
                "member_bulk_registration",
                "member_registration",
                "member_details_view",
                "admin_management",
                "admin_type_management",
                "register_as_administrator",
                "manage_organization_group",
                "withdrawn_members",
                "activity_logs",
                "member_registration_rules"
            ],
        },
        {
            path: "/members-and-message-management",
            permissions: [
                "membership_management",
                "total_member_management",
                "member_bulk_registration",
                "member_registration",
                "member_details_view",
                "admin_management",
                "admin_type_management",
                "register_as_administrator",
                "manage_organization_group",
                "withdrawn_members",
                "activity_logs",
                "member_registration_rules"
            ],
        },
        {
            path: "/content-management",
            permissions: [
                "video_management",
                "video_delete",
                "video_upload",
                "video_list_grp_change",
                "video_details",
                "data_management",
                "data_upload",
                "data_details",
                "data_delete",
                "data_list_grp_change"
            ],
        },
        {
            path: "/curriculum",
            permissions: [
                "course_management",
                "course_delete",
                "course_create",
                "course_details",
                "evaluation_management",
                "evaluation_create",
                "evaluation_details",
                "evaluation_delete"
            ],
        },
        {
            path: "/homepage-management",
            permissions: ["register_basic_information"]
        },
        {
            path: "/customer-service-center",
            permissions: ["11_inquiry", "11_inquiry_delete"]
        },
        {
            path: "/members-and-message-management/membership-management",
            permissions: ["manage_admin", "total_member_management"],
        },
        {
            path: "/members-and-message-management/membership-management/total-member-management/member-registration",
            permissions: ["member_registration"],
        },
        {
            path: "/members-and-message-management/membership-management/total-member-management/member-upload",
            permissions: ["member_bulk_registration"],
        },
        {
            path: "/content-management/video-management",
            permissions: ["video_management", "video_list_grp_change", "video_delete"],
        },
        {
            path: "/content-management/video-management/details",
            permissions: ["video_details"],
        },
        {
            path: "/content-management/document-management",
            permissions: ["data_management", "data_list_grp_change", "data_delete"],
        },
        {
            path: "/content-management/document-management/new-document",
            permissions: ["data_upload"],
        },
        {
            path: "/content-management/document-management/details",
            permissions: ["data_details"],
        },
        {
            path: "/members-and-message-management/membership-management/administrator-management/role-management",
            permissions: ["admin_type_management"],
        },
        {
            path: "/members-and-message-management/membership-management/administrator-management/administrator-registration",
            permissions: ["register_as_administrator"],
        },
        {
            path: "/content-management/video-management/new-video",
            permissions: ["video_upload"],
        },
        {
            path: "/members-and-message-management/membership-management/total-member-management/member-details/member-information",
            permissions: ["member_details_view"],
        },
        {
            path: "/members-and-message-management/membership-management/administrator-management",
            permissions: ["view_membership"],
        },
        {
            path: "/members-and-message-management/membership-management/organizational-group-management",
            permissions: ["manage_organization_group"],
        },
        {
            path: "/members-and-message-management/membership-management/withdrawal-member-management",
            permissions: ["withdrawn_members"],
        },
        {
            path: "/members-and-message-management/membership-management/administration-logs/signin-logs",
            permissions: ["activity_logs"],
        },
        {
            path: "/members-and-message-management/membership-management/administration-logs/activity-logs",
            permissions: ["activity_logs"],
        },
        {
            path: "/members-and-message-management/membership-management/member-registration-settings",
            permissions: ["member_registration_rules"],
        },
        {
            path: "/curriculum/course",
            permissions: ["course_management"],
        },
        {
            path: "/curriculum/course/new-course",
            permissions: ["course_create"],
        },
        {
            path: "/curriculum/course/details/course-information",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/announcement",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/lecture-inquiry",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/announcement/create",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/announcement/view",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/table-of-contents",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/student-management",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/lecture-materials",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/course-evaluation",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/course-evaluation/import",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/course/details/course-information/edit",
            permissions: ["course_details"],
        },
        {
            path: "/curriculum/evaluations",
            permissions: ["evaluation_management"],
        },
        {
            path: "/curriculum/evaluations/create",
            permissions: ["evaluation_create"],
        },
        {
            path: "/curriculum/evaluations/details",
            permissions: ["evaluation_details"],
        },
        {
            path: "/homepage-management/basic-settings",
            permissions: ["register_basic_information"],
        },
        {
            path: "/customer-service-center/inquiry",
            permissions: ["11_inquiry"],
        },
        {
            path: "/customer-service-center/faqs",
            permissions: ["faqs"],
        }
    ]
}

export function getPathPermissions(path) {
    const pathList = allPathList();
    const foundPath = pathList.find(item => item.path === path);
    return foundPath ? foundPath.permissions : [];
}