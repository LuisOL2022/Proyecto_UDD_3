const getEconomicIndicators = async () => {
  const url = new URL( "https://mindicador.cl/api/dolar" )

  const fetchResponse = await fetch( url )

  const data = await fetchResponse.json()

  return data
}

export default getEconomicIndicators