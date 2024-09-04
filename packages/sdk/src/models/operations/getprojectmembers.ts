/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type GetProjectMembersRequest = {
    /**
     * The ID or name of the Project.
     */
    idOrName: string;
    /**
     * Limit how many project members should be returned
     */
    limit?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added since then.
     */
    since?: number | undefined;
    /**
     * Timestamp in milliseconds to only include members added until then.
     */
    until?: number | undefined;
    /**
     * Search project members by their name, username, and email.
     */
    search?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/**
 * Role of this user in the project.
 */
export const GetProjectMembersResponseBodyRole = {
    Admin: "ADMIN",
    ProjectDeveloper: "PROJECT_DEVELOPER",
    ProjectViewer: "PROJECT_VIEWER",
} as const;
/**
 * Role of this user in the project.
 */
export type GetProjectMembersResponseBodyRole = ClosedEnum<
    typeof GetProjectMembersResponseBodyRole
>;

/**
 * Role of this user in the project.
 */
export const ComputedProjectRole = {
    Admin: "ADMIN",
    ProjectDeveloper: "PROJECT_DEVELOPER",
    ProjectViewer: "PROJECT_VIEWER",
} as const;
/**
 * Role of this user in the project.
 */
export type ComputedProjectRole = ClosedEnum<typeof ComputedProjectRole>;

/**
 * The role of this user in the team.
 */
export const ResponseBodyTeamRole = {
    Owner: "OWNER",
    Member: "MEMBER",
    Developer: "DEVELOPER",
    Billing: "BILLING",
    Viewer: "VIEWER",
    Contributor: "CONTRIBUTOR",
} as const;
/**
 * The role of this user in the team.
 */
export type ResponseBodyTeamRole = ClosedEnum<typeof ResponseBodyTeamRole>;

export type ResponseBodyMembers = {
    /**
     * ID of the file for the Avatar of this member.
     */
    avatar?: string | undefined;
    /**
     * The email of this member.
     */
    email: string;
    /**
     * Role of this user in the project.
     */
    role: GetProjectMembersResponseBodyRole;
    /**
     * Role of this user in the project.
     */
    computedProjectRole: ComputedProjectRole;
    /**
     * The ID of this user.
     */
    uid: string;
    /**
     * The unique username of this user.
     */
    username: string;
    /**
     * The name of this user.
     */
    name?: string | undefined;
    /**
     * Timestamp in milliseconds when this member was added.
     */
    createdAt: number;
    /**
     * The role of this user in the team.
     */
    teamRole: ResponseBodyTeamRole;
};

export type GetProjectMembersResponseBodyPagination = {
    hasNext: boolean;
    /**
     * Amount of items in the current page.
     */
    count: number;
    /**
     * Timestamp that must be used to request the next page.
     */
    next: number | null;
    /**
     * Timestamp that must be used to request the previous page.
     */
    prev: number | null;
};

/**
 * Paginated list of members for the project.
 */
export type GetProjectMembersResponseBody2 = {
    members: Array<ResponseBodyMembers>;
    pagination: GetProjectMembersResponseBodyPagination;
};

export type GetProjectMembersResponseBody1 = {};

/**
 * Paginated list of members for the project.
 */
export type GetProjectMembersResponseBody =
    | GetProjectMembersResponseBody1
    | GetProjectMembersResponseBody2;

/** @internal */
export const GetProjectMembersRequest$inboundSchema: z.ZodType<
    GetProjectMembersRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    idOrName: z.string(),
    limit: z.number().int().optional(),
    since: z.number().int().optional(),
    until: z.number().int().optional(),
    search: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GetProjectMembersRequest$Outbound = {
    idOrName: string;
    limit?: number | undefined;
    since?: number | undefined;
    until?: number | undefined;
    search?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GetProjectMembersRequest$outboundSchema: z.ZodType<
    GetProjectMembersRequest$Outbound,
    z.ZodTypeDef,
    GetProjectMembersRequest
> = z.object({
    idOrName: z.string(),
    limit: z.number().int().optional(),
    since: z.number().int().optional(),
    until: z.number().int().optional(),
    search: z.string().optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersRequest$ {
    /** @deprecated use `GetProjectMembersRequest$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersRequest$inboundSchema;
    /** @deprecated use `GetProjectMembersRequest$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersRequest$outboundSchema;
    /** @deprecated use `GetProjectMembersRequest$Outbound` instead. */
    export type Outbound = GetProjectMembersRequest$Outbound;
}

/** @internal */
export const GetProjectMembersResponseBodyRole$inboundSchema: z.ZodNativeEnum<
    typeof GetProjectMembersResponseBodyRole
> = z.nativeEnum(GetProjectMembersResponseBodyRole);

/** @internal */
export const GetProjectMembersResponseBodyRole$outboundSchema: z.ZodNativeEnum<
    typeof GetProjectMembersResponseBodyRole
> = GetProjectMembersResponseBodyRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersResponseBodyRole$ {
    /** @deprecated use `GetProjectMembersResponseBodyRole$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersResponseBodyRole$inboundSchema;
    /** @deprecated use `GetProjectMembersResponseBodyRole$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersResponseBodyRole$outboundSchema;
}

/** @internal */
export const ComputedProjectRole$inboundSchema: z.ZodNativeEnum<typeof ComputedProjectRole> =
    z.nativeEnum(ComputedProjectRole);

/** @internal */
export const ComputedProjectRole$outboundSchema: z.ZodNativeEnum<typeof ComputedProjectRole> =
    ComputedProjectRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComputedProjectRole$ {
    /** @deprecated use `ComputedProjectRole$inboundSchema` instead. */
    export const inboundSchema = ComputedProjectRole$inboundSchema;
    /** @deprecated use `ComputedProjectRole$outboundSchema` instead. */
    export const outboundSchema = ComputedProjectRole$outboundSchema;
}

/** @internal */
export const ResponseBodyTeamRole$inboundSchema: z.ZodNativeEnum<typeof ResponseBodyTeamRole> =
    z.nativeEnum(ResponseBodyTeamRole);

/** @internal */
export const ResponseBodyTeamRole$outboundSchema: z.ZodNativeEnum<typeof ResponseBodyTeamRole> =
    ResponseBodyTeamRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyTeamRole$ {
    /** @deprecated use `ResponseBodyTeamRole$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyTeamRole$inboundSchema;
    /** @deprecated use `ResponseBodyTeamRole$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyTeamRole$outboundSchema;
}

/** @internal */
export const ResponseBodyMembers$inboundSchema: z.ZodType<
    ResponseBodyMembers,
    z.ZodTypeDef,
    unknown
> = z.object({
    avatar: z.string().optional(),
    email: z.string(),
    role: GetProjectMembersResponseBodyRole$inboundSchema,
    computedProjectRole: ComputedProjectRole$inboundSchema,
    uid: z.string(),
    username: z.string(),
    name: z.string().optional(),
    createdAt: z.number(),
    teamRole: ResponseBodyTeamRole$inboundSchema,
});

/** @internal */
export type ResponseBodyMembers$Outbound = {
    avatar?: string | undefined;
    email: string;
    role: string;
    computedProjectRole: string;
    uid: string;
    username: string;
    name?: string | undefined;
    createdAt: number;
    teamRole: string;
};

/** @internal */
export const ResponseBodyMembers$outboundSchema: z.ZodType<
    ResponseBodyMembers$Outbound,
    z.ZodTypeDef,
    ResponseBodyMembers
> = z.object({
    avatar: z.string().optional(),
    email: z.string(),
    role: GetProjectMembersResponseBodyRole$outboundSchema,
    computedProjectRole: ComputedProjectRole$outboundSchema,
    uid: z.string(),
    username: z.string(),
    name: z.string().optional(),
    createdAt: z.number(),
    teamRole: ResponseBodyTeamRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBodyMembers$ {
    /** @deprecated use `ResponseBodyMembers$inboundSchema` instead. */
    export const inboundSchema = ResponseBodyMembers$inboundSchema;
    /** @deprecated use `ResponseBodyMembers$outboundSchema` instead. */
    export const outboundSchema = ResponseBodyMembers$outboundSchema;
    /** @deprecated use `ResponseBodyMembers$Outbound` instead. */
    export type Outbound = ResponseBodyMembers$Outbound;
}

/** @internal */
export const GetProjectMembersResponseBodyPagination$inboundSchema: z.ZodType<
    GetProjectMembersResponseBodyPagination,
    z.ZodTypeDef,
    unknown
> = z.object({
    hasNext: z.boolean(),
    count: z.number(),
    next: z.nullable(z.number()),
    prev: z.nullable(z.number()),
});

/** @internal */
export type GetProjectMembersResponseBodyPagination$Outbound = {
    hasNext: boolean;
    count: number;
    next: number | null;
    prev: number | null;
};

/** @internal */
export const GetProjectMembersResponseBodyPagination$outboundSchema: z.ZodType<
    GetProjectMembersResponseBodyPagination$Outbound,
    z.ZodTypeDef,
    GetProjectMembersResponseBodyPagination
> = z.object({
    hasNext: z.boolean(),
    count: z.number(),
    next: z.nullable(z.number()),
    prev: z.nullable(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersResponseBodyPagination$ {
    /** @deprecated use `GetProjectMembersResponseBodyPagination$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersResponseBodyPagination$inboundSchema;
    /** @deprecated use `GetProjectMembersResponseBodyPagination$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersResponseBodyPagination$outboundSchema;
    /** @deprecated use `GetProjectMembersResponseBodyPagination$Outbound` instead. */
    export type Outbound = GetProjectMembersResponseBodyPagination$Outbound;
}

/** @internal */
export const GetProjectMembersResponseBody2$inboundSchema: z.ZodType<
    GetProjectMembersResponseBody2,
    z.ZodTypeDef,
    unknown
> = z.object({
    members: z.array(z.lazy(() => ResponseBodyMembers$inboundSchema)),
    pagination: z.lazy(() => GetProjectMembersResponseBodyPagination$inboundSchema),
});

/** @internal */
export type GetProjectMembersResponseBody2$Outbound = {
    members: Array<ResponseBodyMembers$Outbound>;
    pagination: GetProjectMembersResponseBodyPagination$Outbound;
};

/** @internal */
export const GetProjectMembersResponseBody2$outboundSchema: z.ZodType<
    GetProjectMembersResponseBody2$Outbound,
    z.ZodTypeDef,
    GetProjectMembersResponseBody2
> = z.object({
    members: z.array(z.lazy(() => ResponseBodyMembers$outboundSchema)),
    pagination: z.lazy(() => GetProjectMembersResponseBodyPagination$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersResponseBody2$ {
    /** @deprecated use `GetProjectMembersResponseBody2$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersResponseBody2$inboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody2$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersResponseBody2$outboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody2$Outbound` instead. */
    export type Outbound = GetProjectMembersResponseBody2$Outbound;
}

/** @internal */
export const GetProjectMembersResponseBody1$inboundSchema: z.ZodType<
    GetProjectMembersResponseBody1,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetProjectMembersResponseBody1$Outbound = {};

/** @internal */
export const GetProjectMembersResponseBody1$outboundSchema: z.ZodType<
    GetProjectMembersResponseBody1$Outbound,
    z.ZodTypeDef,
    GetProjectMembersResponseBody1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersResponseBody1$ {
    /** @deprecated use `GetProjectMembersResponseBody1$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersResponseBody1$inboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody1$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersResponseBody1$outboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody1$Outbound` instead. */
    export type Outbound = GetProjectMembersResponseBody1$Outbound;
}

/** @internal */
export const GetProjectMembersResponseBody$inboundSchema: z.ZodType<
    GetProjectMembersResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetProjectMembersResponseBody1$inboundSchema),
    z.lazy(() => GetProjectMembersResponseBody2$inboundSchema),
]);

/** @internal */
export type GetProjectMembersResponseBody$Outbound =
    | GetProjectMembersResponseBody1$Outbound
    | GetProjectMembersResponseBody2$Outbound;

/** @internal */
export const GetProjectMembersResponseBody$outboundSchema: z.ZodType<
    GetProjectMembersResponseBody$Outbound,
    z.ZodTypeDef,
    GetProjectMembersResponseBody
> = z.union([
    z.lazy(() => GetProjectMembersResponseBody1$outboundSchema),
    z.lazy(() => GetProjectMembersResponseBody2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectMembersResponseBody$ {
    /** @deprecated use `GetProjectMembersResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetProjectMembersResponseBody$inboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetProjectMembersResponseBody$outboundSchema;
    /** @deprecated use `GetProjectMembersResponseBody$Outbound` instead. */
    export type Outbound = GetProjectMembersResponseBody$Outbound;
}
