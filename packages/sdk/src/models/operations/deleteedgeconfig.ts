/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteEdgeConfigRequest = {
    edgeConfigId: string;
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
export const DeleteEdgeConfigRequest$inboundSchema: z.ZodType<
    DeleteEdgeConfigRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/** @internal */
export type DeleteEdgeConfigRequest$Outbound = {
    edgeConfigId: string;
    teamId?: string | undefined;
    slug?: string | undefined;
};

/** @internal */
export const DeleteEdgeConfigRequest$outboundSchema: z.ZodType<
    DeleteEdgeConfigRequest$Outbound,
    z.ZodTypeDef,
    DeleteEdgeConfigRequest
> = z.object({
    edgeConfigId: z.string(),
    teamId: z.string().optional(),
    slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteEdgeConfigRequest$ {
    /** @deprecated use `DeleteEdgeConfigRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteEdgeConfigRequest$inboundSchema;
    /** @deprecated use `DeleteEdgeConfigRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteEdgeConfigRequest$outboundSchema;
    /** @deprecated use `DeleteEdgeConfigRequest$Outbound` instead. */
    export type Outbound = DeleteEdgeConfigRequest$Outbound;
}
