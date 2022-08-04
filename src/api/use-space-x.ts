import useSWR, {Fetcher} from 'swr'
import useSWRInfinite, {SWRInfiniteKeyLoader} from 'swr/infinite'
import {config} from '../config'
import {Launch, Pad} from './types'

const fetcher = async (input: RequestInfo, init: RequestInit) => {
    const response = await fetch(input, init)
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return await response.json()
}

function getSpaceXUrl(path: string, options: any) {
    const searchParams = new URLSearchParams()
    for (const property in options) {
        searchParams.append(property, options[property])
    }

    const spaceXApiBase = config.spaceX.apiBase
    return `${spaceXApiBase}${path}?${searchParams.toString()}`
}

export function useSpaceX<T>(path: string | null, options: any) {
    return useSWR(
        path ? getSpaceXUrl(path, options) : null,
        fetcher as Fetcher<T>
    )
}

export function useSpaceXPaginated<T>(path: string, options: any) {
    const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.length) {
            return null
        }
        return getSpaceXUrl(path, {
            ...options,
            offset: options.limit * pageIndex
        })
    }

    return useSWRInfinite(getKey, fetcher as Fetcher<T>)
}

// Launches

export function useLaunchesPaginated(options: any) {
    return useSpaceXPaginated<Launch[]>('/launches/past', options)
}

export function useLaunch(flightNumber: number, options: any) {
    return useSpaceX<Launch>(`/launches/${flightNumber}`, options)
}

export function useRecentLaunches(siteId?: string) {
    return useSpaceX<Launch[]>(siteId ? `/launches/past` : null, {
        limit: 3,
        order: 'desc',
        sort: 'launch_date_utc',
        site_id: siteId
    })
}

// Pads

export function usePadsPaginated(options: any) {
    return useSpaceXPaginated<Pad[]>('/launchpads', options)
}

export function usePad(siteId: string, options: any) {
    return useSpaceX<Pad>(`/launchpads/${siteId}`, options)
}
