import types from "./types"

export default function localStoragePlugin(store) {
  store.subscribe((mutation, state) => {
    if (['ADDRECORD', "MODIFYRECORD", "REMOVERECORD"].indexOf(mutation.type) !== -1) {
      localStorage.setItem(types.RECORD, JSON.stringify(state.record))
    }
    if (['ADDNOTEBOOK', 'ADDRECORD', "MODIFYNOTEBOOK"].indexOf(mutation.type) !== -1) {
      localStorage.setItem(types.NOTEBOOK, JSON.stringify(state.notebook))
    }
    if (['USER'].indexOf(mutation.type) !== -1) {
      localStorage.setItem(types.USER, JSON.stringify(state.user))
    }
    if ("MODIFYCURRENTNOTEBOOK" === mutation.type !== -1) {
      localStorage.setItem(types.CURRENTNOTEBOOK, JSON.stringify(state.current_notebook))
    }
    if ("MODIFYSELECTDATE" === mutation.type !== -1) {
      localStorage.setItem(types.SELECTDATE, JSON.stringify(state.select_date))
    }

  })
}
