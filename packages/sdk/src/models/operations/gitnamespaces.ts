/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Provider = {
    Github: "github",
    GithubCustomHost: "github-custom-host",
    Gitlab: "gitlab",
    Bitbucket: "bitbucket",
} as const;
export type Provider = ClosedEnum<typeof Provider>;

export type GitNamespacesRequest = {
    /**
     * The custom Git host if using a custom Git provider, like GitHub Enterprise Server
     */
    host?: string | undefined;
    provider?: Provider | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

export type Id = string | number;

export type GitNamespacesResponseBody = {
    provider: string;
    slug: string;
    id: string | number;
    ownerType: string;
    name?: string | undefined;
    isAccessRestricted?: boolean | undefined;
    installationId?: number | undefined;
    requireReauth?: boolean | undefined;
};

/** @internal */
export const Provider$inboundSchema: z.ZodNativeEnum<typeof Provider> = z.nativeEnum(Provider);

/** @internal */
export const Provider$outboundSchema: z.ZodNativeEnum<typeof Provider> = Provider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Provider$ {
    /** @deprecated use `Provider$inboundSchema` instead. */
    export const inboundSchema = Provider$inboundSchema;
    /** @deprecated use `Provider$outboundSchema` instead. */
    export const outboundSchema = Provider$outboundSchema;
}

/** @internal */
export const GitNamespacesRequest$inboundSchema: z.ZodType<
    GitNamespacesRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    host: z.string().optional(),
    provider: Provider$inboundSchema.optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type GitNamespacesRequest$Outbound = {
    host?: string | undefined;
    provider?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const GitNamespacesRequest$outboundSchema: z.ZodType<
    GitNamespacesRequest$Outbound,
    z.ZodTypeDef,
    GitNamespacesRequest
> = z.object({
    host: z.string().optional(),
    provider: Provider$outboundSchema.optional(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitNamespacesRequest$ {
    /** @deprecated use `GitNamespacesRequest$inboundSchema` instead. */
    export const inboundSchema = GitNamespacesRequest$inboundSchema;
    /** @deprecated use `GitNamespacesRequest$outboundSchema` instead. */
    export const outboundSchema = GitNamespacesRequest$outboundSchema;
    /** @deprecated use `GitNamespacesRequest$Outbound` instead. */
    export type Outbound = GitNamespacesRequest$Outbound;
}

/** @internal */
export const Id$inboundSchema: z.ZodType<Id, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
]);

/** @internal */
export type Id$Outbound = string | number;

/** @internal */
export const Id$outboundSchema: z.ZodType<Id$Outbound, z.ZodTypeDef, Id> = z.union([
    z.string(),
    z.number(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Id$ {
    /** @deprecated use `Id$inboundSchema` instead. */
    export const inboundSchema = Id$inboundSchema;
    /** @deprecated use `Id$outboundSchema` instead. */
    export const outboundSchema = Id$outboundSchema;
    /** @deprecated use `Id$Outbound` instead. */
    export type Outbound = Id$Outbound;
}

/** @internal */
export const GitNamespacesResponseBody$inboundSchema: z.ZodType<
    GitNamespacesResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    provider: z.string(),
    slug: z.string(),
    id: z.union([z.string(), z.number()]),
    ownerType: z.string(),
    name: z.string().optional(),
    isAccessRestricted: z.boolean().optional(),
    installationId: z.number().optional(),
    requireReauth: z.boolean().optional(),
});

/** @internal */
export type GitNamespacesResponseBody$Outbound = {
    provider: string;
    slug: string;
    id: string | number;
    ownerType: string;
    name?: string | undefined;
    isAccessRestricted?: boolean | undefined;
    installationId?: number | undefined;
    requireReauth?: boolean | undefined;
};

/** @internal */
export const GitNamespacesResponseBody$outboundSchema: z.ZodType<
    GitNamespacesResponseBody$Outbound,
    z.ZodTypeDef,
    GitNamespacesResponseBody
> = z.object({
    provider: z.string(),
    slug: z.string(),
    id: z.union([z.string(), z.number()]),
    ownerType: z.string(),
    name: z.string().optional(),
    isAccessRestricted: z.boolean().optional(),
    installationId: z.number().optional(),
    requireReauth: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GitNamespacesResponseBody$ {
    /** @deprecated use `GitNamespacesResponseBody$inboundSchema` instead. */
    export const inboundSchema = GitNamespacesResponseBody$inboundSchema;
    /** @deprecated use `GitNamespacesResponseBody$outboundSchema` instead. */
    export const outboundSchema = GitNamespacesResponseBody$outboundSchema;
    /** @deprecated use `GitNamespacesResponseBody$Outbound` instead. */
    export type Outbound = GitNamespacesResponseBody$Outbound;
}
