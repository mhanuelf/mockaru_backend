
//PQR QUERYS

module.exports = {
    PQR_LIST_PQR_PER_PRODUCT_TYPE: "select  c.DESCRIPCION AS PRODUCTO,count(p.TIPO_PRODUCTO) as CANTIDAD, c.TIPO_PRODUCTO  from INFO_PQR p , INFO_CATALOGO c where p.TIPO_PRODUCTO = c.TIPO_PRODUCTO group by p.TIPO_PRODUCTO,  c.DESCRIPCION",
    GET_PQR_BY_PRODUCT_TYPE: "select TIPO_RADICACION as tipoRadicacion, DESCRIPCION_CASO as descripcionCaso, count(TIPO_RADICACION) as cantidadQuejas, count(distinct NUMERO_IDENTIFICACION) as cantidadClientes from INFO_PQR where TIPO_PRODUCTO = ? group by descripcionCaso, tipoRadicacion    order by cantidadQuejas desc",
    CLIENT_LIST_CLIENT_BY_COMPLAIN: "SELECT concat(cli.NOMBRES, cli.APELLIDOS) as nombre, COALESCE(cli.TELEFONO, 'N/A') as telefono, COALESCE(cli.EMAIL, 'N/A') as email FROM mockaru.INFO_CLIENTE cli, INFO_PQR p where p.NUMERO_IDENTIFICACION = cli.NUMERO_IDENTIFICACION and p.DESCRIPCION_CASO = ?"
    
  };
