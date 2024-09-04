/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
 */
export const Source = {
    Local: "LOCAL",
    Remote: "REMOTE",
} as const;
/**
 * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
 */
export type Source = ClosedEnum<typeof Source>;

/**
 * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
 */
export const Event = {
    Hit: "HIT",
    Miss: "MISS",
} as const;
/**
 * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
 */
export type Event = ClosedEnum<typeof Event>;

export type RequestBody = {
    /**
     * A UUID (universally unique identifer) for the session that generated this event.
     */
    sessionId: string;
    /**
     * One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.
     */
    source: Source;
    /**
     * One of `HIT` or `MISS`. `HIT` specifies that a cached artifact for `hash` was found in the cache. `MISS` specifies that a cached artifact with `hash` was not found.
     */
    event: Event;
    /**
     * The artifact hash
     */
    hash: string;
    /**
     * The time taken to generate the artifact. This should be sent as a body parameter on `HIT` events.
     */
    duration?: number | undefined;
};

export type RecordEventsRequest = {
    /**
     * The continuous integration or delivery environment where this artifact is downloaded.
     */
    xArtifactClientCi?: string | undefined;
    /**
     * 1 if the client is an interactive shell. Otherwise 0
     */
    xArtifactClientInteractive?: number | undefined;
    /**
     * The Team identifier to perform the request on behalf of.
     */
    teamId?: string | undefined;
    /**
     * The Team slug to perform the request on behalf of.
     */
    slug?: string | undefined;
    requestBody?: Array<RequestBody> | undefined;
};

/** @internal */
export const Source$inboundSchema: z.ZodNativeEnum<typeof Source> = z.nativeEnum(Source);

/** @internal */
export const Source$outboundSchema: z.ZodNativeEnum<typeof Source> = Source$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Source$ {
    /** @deprecated use `Source$inboundSchema` instead. */
    export const inboundSchema = Source$inboundSchema;
    /** @deprecated use `Source$outboundSchema` instead. */
    export const outboundSchema = Source$outboundSchema;
}

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(Event);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> = Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
    /** @deprecated use `Event$inboundSchema` instead. */
    export const inboundSchema = Event$inboundSchema;
    /** @deprecated use `Event$outboundSchema` instead. */
    export const outboundSchema = Event$outboundSchema;
}

/** @internal */
export const RequestBody$inboundSchema: z.ZodType<RequestBody, z.ZodTypeDef, unknown> = z.object({
    sessionId: z.string(),
    source: Source$inboundSchema,
    event: Event$inboundSchema,
    hash: z.string(),
    duration: z.number().optional(),
});

/** @internal */
export type RequestBody$Outbound = {
    sessionId: string;
    source: string;
    event: string;
    hash: string;
    duration?: number | undefined;
};

/** @internal */
export const RequestBody$outboundSchema: z.ZodType<
    RequestBody$Outbound,
    z.ZodTypeDef,
    RequestBody
> = z.object({
    sessionId: z.string(),
    source: Source$outboundSchema,
    event: Event$outboundSchema,
    hash: z.string(),
    duration: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestBody$ {
    /** @deprecated use `RequestBody$inboundSchema` instead. */
    export const inboundSchema = RequestBody$inboundSchema;
    /** @deprecated use `RequestBody$outboundSchema` instead. */
    export const outboundSchema = RequestBody$outboundSchema;
    /** @deprecated use `RequestBody$Outbound` instead. */
    export type Outbound = RequestBody$Outbound;
}

/** @internal */
export const RecordEventsRequest$inboundSchema: z.ZodType<
    RecordEventsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-artifact-client-ci": z.string().optional(),
        "x-artifact-client-interactive": z.number().int().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        RequestBody: z.array(z.lazy(() => RequestBody$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-artifact-client-ci": "xArtifactClientCi",
            "x-artifact-client-interactive": "xArtifactClientInteractive",
            RequestBody: "requestBody",
        });
    });

/** @internal */
export type RecordEventsRequest$Outbound = {
    "x-artifact-client-ci"?: string | undefined;
    "x-artifact-client-interactive"?: number | undefined;
    teamId?: string | undefined;
    slug?: string | undefined;
    RequestBody?: Array<RequestBody$Outbound> | undefined;
};

/** @internal */
export const RecordEventsRequest$outboundSchema: z.ZodType<
    RecordEventsRequest$Outbound,
    z.ZodTypeDef,
    RecordEventsRequest
> = z
    .object({
        xArtifactClientCi: z.string().optional(),
        xArtifactClientInteractive: z.number().int().optional(),
        teamId: z.string().optional(),
        slug: z.string().optional(),
        requestBody: z.array(z.lazy(() => RequestBody$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xArtifactClientCi: "x-artifact-client-ci",
            xArtifactClientInteractive: "x-artifact-client-interactive",
            requestBody: "RequestBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecordEventsRequest$ {
    /** @deprecated use `RecordEventsRequest$inboundSchema` instead. */
    export const inboundSchema = RecordEventsRequest$inboundSchema;
    /** @deprecated use `RecordEventsRequest$outboundSchema` instead. */
    export const outboundSchema = RecordEventsRequest$outboundSchema;
    /** @deprecated use `RecordEventsRequest$Outbound` instead. */
    export type Outbound = RecordEventsRequest$Outbound;
}
