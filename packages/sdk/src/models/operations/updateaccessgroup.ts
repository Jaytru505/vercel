/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export const Role = {
    Admin: "ADMIN",
    ProjectViewer: "PROJECT_VIEWER",
    ProjectDeveloper: "PROJECT_DEVELOPER",
} as const;
/**
 * The project role that will be added to this Access Group. \"null\" will remove this project level role.
 */
export type Role = ClosedEnum<typeof Role>;

export type Projects = {
    /**
     * The ID of the project.
     */
    projectId: string;
    /**
     * The project role that will be added to this Access Group. \"null\" will remove this project level role.
     */
    role: Role | null;
};

export type UpdateAccessGroupRequestBody = {
    /**
     * The name of the access group
     */
    name?: string | undefined;
    projects?: Array<Projects> | undefined;
    /**
     * List of members to add to the access group.
     */
    membersToAdd?: Array<string> | undefined;
    /**
     * List of members to remove from the access group.
     */
    membersToRemove?: Array<string> | undefined;
};

export type UpdateAccessGroupRequest = {
    idOrName: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: UpdateAccessGroupRequestBody | undefined;
};

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(Role);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> = Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
    /** @deprecated use `Role$inboundSchema` instead. */
    export const inboundSchema = Role$inboundSchema;
    /** @deprecated use `Role$outboundSchema` instead. */
    export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const Projects$inboundSchema: z.ZodType<Projects, z.ZodTypeDef, unknown> = z.object({
    projectId: z.string(),
    role: z.nullable(Role$inboundSchema),
});

/** @internal */
export type Projects$Outbound = {
    projectId: string;
    role: string | null;
};

/** @internal */
export const Projects$outboundSchema: z.ZodType<Projects$Outbound, z.ZodTypeDef, Projects> =
    z.object({
        projectId: z.string(),
        role: z.nullable(Role$outboundSchema),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Projects$ {
    /** @deprecated use `Projects$inboundSchema` instead. */
    export const inboundSchema = Projects$inboundSchema;
    /** @deprecated use `Projects$outboundSchema` instead. */
    export const outboundSchema = Projects$outboundSchema;
    /** @deprecated use `Projects$Outbound` instead. */
    export type Outbound = Projects$Outbound;
}

/** @internal */
export const UpdateAccessGroupRequestBody$inboundSchema: z.ZodType<
    UpdateAccessGroupRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
    projects: z.array(z.lazy(() => Projects$inboundSchema)).optional(),
    membersToAdd: z.array(z.string()).optional(),
    membersToRemove: z.array(z.string()).optional(),
});

/** @internal */
export type UpdateAccessGroupRequestBody$Outbound = {
    name?: string | undefined;
    projects?: Array<Projects$Outbound> | undefined;
    membersToAdd?: Array<string> | undefined;
    membersToRemove?: Array<string> | undefined;
};

/** @internal */
export const UpdateAccessGroupRequestBody$outboundSchema: z.ZodType<
    UpdateAccessGroupRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateAccessGroupRequestBody
> = z.object({
    name: z.string().optional(),
    projects: z.array(z.lazy(() => Projects$outboundSchema)).optional(),
    membersToAdd: z.array(z.string()).optional(),
    membersToRemove: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupRequestBody$ {
    /** @deprecated use `UpdateAccessGroupRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpdateAccessGroupRequestBody$inboundSchema;
    /** @deprecated use `UpdateAccessGroupRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpdateAccessGroupRequestBody$outboundSchema;
    /** @deprecated use `UpdateAccessGroupRequestBody$Outbound` instead. */
    export type Outbound = UpdateAccessGroupRequestBody$Outbound;
}

/** @internal */
export const UpdateAccessGroupRequest$inboundSchema: z.ZodType<
    UpdateAccessGroupRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => UpdateAccessGroupRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type UpdateAccessGroupRequest$Outbound = {
    idOrName: string;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: UpdateAccessGroupRequestBody$Outbound | undefined;
};

/** @internal */
export const UpdateAccessGroupRequest$outboundSchema: z.ZodType<
    UpdateAccessGroupRequest$Outbound,
    z.ZodTypeDef,
    UpdateAccessGroupRequest
> = z
    .object({
        idOrName: z.string(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => UpdateAccessGroupRequestBody$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAccessGroupRequest$ {
    /** @deprecated use `UpdateAccessGroupRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateAccessGroupRequest$inboundSchema;
    /** @deprecated use `UpdateAccessGroupRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateAccessGroupRequest$outboundSchema;
    /** @deprecated use `UpdateAccessGroupRequest$Outbound` instead. */
    export type Outbound = UpdateAccessGroupRequest$Outbound;
}
