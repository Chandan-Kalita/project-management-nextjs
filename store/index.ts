import { init, Models, RematchDispatch, RematchRootState } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import updatedPlugin, { ExtraModelsFromUpdated } from "@rematch/updated";
import immerPlugin from "@rematch/immer";
import typedStatePlugin from "@rematch/typed-state";
import { useMemo } from "react";
import selectPlugin from "@rematch/select";
import 'reflect-metadata';
import CommonStore from "./models/common.model";
import UserStore from "./models/user.model";
import AdminStore from "./models/admin.model";
import ProposalStore from "./models/proposal.model";

let store: any
let select

export interface RootModel extends Models<RootModel> {
    commonStore: typeof CommonStore,
    userStore: typeof UserStore,
    adminStore: typeof AdminStore,
    proposalStore: typeof ProposalStore
}

const models: RootModel = {
    commonStore: CommonStore,
    userStore: UserStore,
    adminStore: AdminStore,
    proposalStore: ProposalStore
}

type LoadingModel = ExtraModelsFromLoading<RootModel, { type: 'full' }>

type UpdatedModel = ExtraModelsFromUpdated<RootModel>

type FullModel = LoadingModel & UpdatedModel

export const initStore = (initialState: any) =>
    init<RootModel, FullModel>({
        models,
        redux: {
            initialState
        },
        plugins: [
            immerPlugin(),
            selectPlugin(),
            typedStatePlugin(),
            loadingPlugin({ type: 'full' }),
            updatedPlugin()]
    })

export const initializeStore = (preloadedStore: any) => {
    let _store = store ?? initStore(preloadedStore)

    if (preloadedStore && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedStore
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store

    if (!_store) store = _store

    return _store
}

export function useStore(initialState: any) {
    return useMemo(() => initializeStore(initialState), [initialState])
}

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
