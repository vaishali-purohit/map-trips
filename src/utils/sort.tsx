// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortList = (list: any[], type: string | null) => {
  if (type === 'dateAsec') {
    return list.sort((a, b) => new Date(a.travelFromDate || 0).getTime() - new Date(b.travelFromDate || 0).getTime())
  } else if (type === 'dateDesc') {
    return list.sort((a, b) => new Date(b.travelFromDate || 0).getTime() - new Date(a.travelFromDate || 0).getTime())
  } else if (type === 'A-Z') {
    return list.sort((a, b) => ((a.destination || '') > (b.destination || '') ? 1 : -1))
  } else if (type === 'Z-A') {
    return list.sort((a, b) => ((a.destination || '') > (b.destination || '') ? -1 : 1))
  }
  return list;
}
