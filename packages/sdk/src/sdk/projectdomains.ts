/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { projectDomainsDelete } from "../funcs/projectDomainsDelete.js";
import { projectDomainsGet } from "../funcs/projectDomainsGet.js";
import { projectDomainsUpdate } from "../funcs/projectDomainsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ProjectDomains extends ClientSDK {
    /**
     * Get a project domain
     *
     * @remarks
     * Get project domain by project id/name and domain name.
     */
    async get(
        request: operations.GetProjectDomainRequest,
        options?: RequestOptions
    ): Promise<operations.GetProjectDomainResponseBody> {
        return unwrapAsync(projectDomainsGet(this, request, options));
    }

    /**
     * Update a project domain
     *
     * @remarks
     * Update a project domain's configuration, including the name, git branch and redirect of the domain.
     */
    async update(
        request: operations.UpdateProjectDomainRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateProjectDomainResponseBody> {
        return unwrapAsync(projectDomainsUpdate(this, request, options));
    }

    /**
     * Remove a domain from a project
     *
     * @remarks
     * Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.
     */
    async delete(
        request: operations.RemoveProjectDomainRequest,
        options?: RequestOptions
    ): Promise<operations.RemoveProjectDomainResponseBody> {
        return unwrapAsync(projectDomainsDelete(this, request, options));
    }
}
