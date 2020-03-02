/**
 * A Log object
 */
interface Log {
  id: string, // unique amount all logs
  time: string, // date of the log
  title: string,
  data?: any
}

type Unsubscribe = () => void

export default class Logs {
  static id = 0
  static subscribers: any[] = []
  /**
   * log something
   * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
   * @param message a clear message of the log associated to the type
   */
  static add(title: any, data: any = '') {
    const obj: Log = { id: String(++Logs.id), time: new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''), title, data }
    Logs._dispatch(obj)
  }

  /**
   * listen to logs.
   * @param cb that is called for each future log() with the Log object
   * @return a function that can be called to unsubscribe the listener
   */
  static listen(cb: (log: Log) => void): Unsubscribe {
    Logs.subscribers.push(cb)
    return () => {
      const i = Logs.subscribers.indexOf(cb)
      if (i !== -1) {
        // equivalent of subscribers.splice(i, 1)
        // https://twitter.com/Rich_Harris/status/1125850391155965952
        Logs.subscribers[i] = Logs.subscribers[Logs.subscribers.length - 1]
        Logs.subscribers.pop()
      }
    }
  }

  private static _dispatch(log: Log) {
    for (let i = 0; i < Logs.subscribers.length; i++) {
      try {
        Logs.subscribers[i](log)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
