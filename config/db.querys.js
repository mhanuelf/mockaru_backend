
//PQR QUERYS

module.exports = {
    PQR_LIST_PQR_PER_PRODUCT_TYPE: "select  c.DESCRIPCION AS PRODUCTO,count(p.TIPO_PRODUCTO) as CANTIDAD, c.TIPO_PRODUCTO  from INFO_PQR p , INFO_CATALOGO c where p.TIPO_PRODUCTO = c.TIPO_PRODUCTO group by p.TIPO_PRODUCTO,  c.DESCRIPCION",
    GET_PQR_BY_PRODUCT_TYPE: "select TIPO_RADICACION as tipoRadicacion, DESCRIPCION_CASO as descripcionCaso, count(TIPO_RADICACION) as cantidadQuejas, count(distinct NUMERO_IDENTIFICACION) as cantidadClientes from INFO_PQR where TIPO_PRODUCTO = ? group by descripcionCaso, tipoRadicacion    order by cantidadQuejas desc",
    CLIENT_LIST_CLIENT_BY_COMPLAIN: "SELECT cli.NuMERO_IDENTIFICACiON as identificacion , concat(cli.NOMBRES, cli.APELLIDOS) as nombre, COALESCE(cli.TELEFONO, 'N/A') as telefono, COALESCE(cli.EMAIL, 'N/A') as email FROM mockaru.INFO_CLIENTE cli, INFO_PQR p where p.NUMERO_IDENTIFICACION = cli.NUMERO_IDENTIFICACION and p.DESCRIPCION_CASO = ?",
    CLIENT_GET_CLIENT_BY_ID: "SELECT NUMERO_IDENTIFICACION as identificationNumber, concat(NOMBRES, ' ' , APELLIDOS) AS name, COALESCE(EMAIL, 'N/A') AS email, coalesce(TELEFONO, 'N/A') AS phoneNumber FROM mockaru.INFO_CLIENTE WHERE NUMERO_IDENTIFICACION = ?",
    CHANNEL_GET_CHANNEL_BY_CLIENT_ID: "SELECT TIPO_IDENTIFICACION as identificationType,NUMERO_IDENTIFICACION as identificationNumber, CANAL_USADO_MES as usedChannelMonth, CANTIDAD_USO_MES as ussageMonth, MONTO_TRANSADO_MES as amountTransado, FECHA as date FROM mockaru.INFO_CANAL where NUMERO_IDENTIFICACION= ?",
    CLIENT_GET_FINNANTIAL_DATA_BY_CLIENT_ID: "SELECT i.CONTRATO as contrato, c.DESCRIPCION as descripcion, i.ESTADO as estado, i.IMPORTE_ORIGINAL as importeOriginal, i.SALDO_PENDIENTE as saldoPendiente, i.SALDO_PUNTOS as saldoPuntos, i.INTERESES_PAGADOS as interesesPagados, i.INDICADOR_MORA as indicadorMora    FROM mockaru.INFO_FINANCIERA i, INFO_CATALOGO c, INFO_CLIENTE cli   where i.ID_PRODUCTO = c.ID_PRODUCTO and cli.ID_INTERNO = i.ID_INTERNO and cli.NUMERO_IDENTIFICACION = ?"
    
  };
