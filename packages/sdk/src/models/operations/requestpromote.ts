/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RequestPromoteRequest = {
    projectId: string;
    deploymentId: string;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
};

/** @internal */
export const RequestPromoteRequest$inboundSchema: z.ZodType<
    RequestPromoteRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    projectId: z.string(),
    deploymentId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type RequestPromoteRequest$Outbound = {
    projectId: string;
    deploymentId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const RequestPromoteRequest$outboundSchema: z.ZodType<
    RequestPromoteRequest$Outbound,
    z.ZodTypeDef,
    RequestPromoteRequest
> = z.object({
    projectId: z.string(),
    deploymentId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestPromoteRequest$ {
    /** @deprecated use `RequestPromoteRequest$inboundSchema` instead. */
    export const inboundSchema = RequestPromoteRequest$inboundSchema;
    /** @deprecated use `RequestPromoteRequest$outboundSchema` instead. */
    export const outboundSchema = RequestPromoteRequest$outboundSchema;
    /** @deprecated use `RequestPromoteRequest$Outbound` instead. */
    export type Outbound = RequestPromoteRequest$Outbound;
}
