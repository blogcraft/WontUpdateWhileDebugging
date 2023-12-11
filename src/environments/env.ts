type decimales = number | 'auto';
export type code = string | 'code' | 'symbol' | 'symbol-narrow';

export interface Env {
  production: boolean;
  appUrl: string;
  shouldIGetTokenTime: number;
  sessionTimeLeft: number;
  habilitarNotificaciones: boolean;
  habilitarMensajes: boolean;
  habilitarFiltroNegocio: boolean;
  habilitarMonedaSalida: boolean;
  mostrarCodMoneda: code;
  mostrarDecimales: decimales;
  mostrarPerfilRiesfo: boolean;
  habilitarCambioFecha: boolean;
  habilitarCircular57: boolean;
  habilitarCircular1962: boolean;
  habilitarDatosDemograficos: boolean;
  habilitarDeclaracionCrs: boolean;
  habilitarCartolaCuenta: boolean;
  habilitarCartolaCliente: boolean;
  habilitarCartolaClienteApv: boolean;
  habilitarCartolaGrupo: boolean;
  evolucionTipoCambioOnline: boolean;
  cliente: number;
}
