import types from "./types"

export default function localStoragePlugin(store) {
  store.subscribe((mutation, state) => {
    if (['ADDRECORD', "MODIFYRECORD"].indexOf(mutation.type)) {
      localStorage.setItem(types.RECORD, JSON.stringify(state.record))
    } else if (['ADDNOTEBOOK', "MODIFYNOTEBOOK"].indexOf(mutation.type)) {
      localStorage.setItem(types.NOTEBOOK, JSON.stringify(state.notebook))
    } else if (['USER'].indexOf(mutation.type)) {
      localStorage.setItem(types.USER, JSON.stringify(state.user))
    } else if ("MODIFYCURRENTNOTEBOOK" === mutation.type) {
      localStorage.setItem(types.CURRENTNOTEBOOK, JSON.stringify(state.current_notebook))
    } else if ("MODIFYSELECTDATE" === mutation.type) {
      localStorage.setItem(types.SELECTDATE, JSON.stringify(state.select_date))
    }
  })
}
