/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type PatchEdgeConfigSchemaRequestBody = {
    definition?: any | undefined;
};

export type PatchEdgeConfigSchemaRequest = {
    edgeConfigId: string;
    dryRun?: string | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: PatchEdgeConfigSchemaRequestBody | undefined;
};

/**
 * The JSON schema uploaded by the user
 */
export type PatchEdgeConfigSchemaResponseBody = {};

/** @internal */
export const PatchEdgeConfigSchemaRequestBody$inboundSchema: z.ZodType<
    PatchEdgeConfigSchemaRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    definition: z.any().optional(),
});

/** @internal */
export type PatchEdgeConfigSchemaRequestBody$Outbound = {
    definition?: any | undefined;
};

/** @internal */
export const PatchEdgeConfigSchemaRequestBody$outboundSchema: z.ZodType<
    PatchEdgeConfigSchemaRequestBody$Outbound,
    z.ZodTypeDef,
    PatchEdgeConfigSchemaRequestBody
> = z.object({
    definition: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchEdgeConfigSchemaRequestBody$ {
    /** @deprecated use `PatchEdgeConfigSchemaRequestBody$inboundSchema` instead. */
    export const inboundSchema = PatchEdgeConfigSchemaRequestBody$inboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaRequestBody$outboundSchema` instead. */
    export const outboundSchema = PatchEdgeConfigSchemaRequestBody$outboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaRequestBody$Outbound` instead. */
    export type Outbound = PatchEdgeConfigSchemaRequestBody$Outbound;
}

/** @internal */
export const PatchEdgeConfigSchemaRequest$inboundSchema: z.ZodType<
    PatchEdgeConfigSchemaRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        edgeConfigId: z.string(),
        dryRun: z.string().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.lazy(() => PatchEdgeConfigSchemaRequestBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type PatchEdgeConfigSchemaRequest$Outbound = {
    edgeConfigId: string;
    dryRun?: string | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: PatchEdgeConfigSchemaRequestBody$Outbound | undefined;
};

/** @internal */
export const PatchEdgeConfigSchemaRequest$outboundSchema: z.ZodType<
    PatchEdgeConfigSchemaRequest$Outbound,
    z.ZodTypeDef,
    PatchEdgeConfigSchemaRequest
> = z
    .object({
        edgeConfigId: z.string(),
        dryRun: z.string().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.lazy(() => PatchEdgeConfigSchemaRequestBody$outboundSchema).optional(),
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
export namespace PatchEdgeConfigSchemaRequest$ {
    /** @deprecated use `PatchEdgeConfigSchemaRequest$inboundSchema` instead. */
    export const inboundSchema = PatchEdgeConfigSchemaRequest$inboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaRequest$outboundSchema` instead. */
    export const outboundSchema = PatchEdgeConfigSchemaRequest$outboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaRequest$Outbound` instead. */
    export type Outbound = PatchEdgeConfigSchemaRequest$Outbound;
}

/** @internal */
export const PatchEdgeConfigSchemaResponseBody$inboundSchema: z.ZodType<
    PatchEdgeConfigSchemaResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type PatchEdgeConfigSchemaResponseBody$Outbound = {};

/** @internal */
export const PatchEdgeConfigSchemaResponseBody$outboundSchema: z.ZodType<
    PatchEdgeConfigSchemaResponseBody$Outbound,
    z.ZodTypeDef,
    PatchEdgeConfigSchemaResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchEdgeConfigSchemaResponseBody$ {
    /** @deprecated use `PatchEdgeConfigSchemaResponseBody$inboundSchema` instead. */
    export const inboundSchema = PatchEdgeConfigSchemaResponseBody$inboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaResponseBody$outboundSchema` instead. */
    export const outboundSchema = PatchEdgeConfigSchemaResponseBody$outboundSchema;
    /** @deprecated use `PatchEdgeConfigSchemaResponseBody$Outbound` instead. */
    export type Outbound = PatchEdgeConfigSchemaResponseBody$Outbound;
}
