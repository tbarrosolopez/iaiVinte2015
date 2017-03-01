require 'sinatra'
require 'i18n'
require 'better_errors' if development?


configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__
end

# Configuracion
configure do
  I18n.enforce_available_locales = false
  I18n.load_path = Dir[File.join(settings.root, 'locales', '*.yml')]

  set :port, 3003
  set :bind, '0.0.0.0'


end

before '/:locale/*' do
   I18n.locale = params[:locale]
end

before '/' do
  I18n.locale = :es
end

before '/:locale' do
  I18n.locale = params[:locale]
end

# Filtros para el idioma
before '/:locale/*' do
  I18n.locale = (params[:locale].eql?('es') || params[:locale].eql?('en')) ? params[:locale] : :es
end

configure do
  set :show_exceptions, false
#    set :show_exceptions, :after_handler
end


# Globales

get '/' do
  @titulo= 'Reporte Anual'
  erb (I18n.locale.to_s + '/index').to_sym,  :layout => ("/layouts/home").to_sym
end

get '/en' do
  @titulo= 'Annual Report'
  erb (I18n.locale.to_s + '/index').to_sym,  :layout => ("/layouts/home").to_sym
end

get '/es' do
  @titulo= 'Reporte Anual'
  erb (I18n.locale.to_s + '/index').to_sym,  :layout => ("/layouts/home").to_sym
end


# error do
#   @titulo = " Error 404"
#   erb (I18n.locale.to_s + '/page-404').to_sym, :layout => ("global/bloques/content").to_sym
# end
#
# not_found do
#   # status 404
#   @titulo = " Error 404"
#   erb (I18n.locale.to_s + '/vistas/independientes/page-404').to_sym, :layout => ("global/bloques/content").to_sym
# end
#
get '/:locale/resumen' do
  @titulo = "Resumen ejecutivo"
  erb :"#{I18n.locale}/resumen-ejecutivo", :layout => ("layouts/interior").to_sym
end
#
get '/:locale/info-financiera' do
  @titulo = "Información financiera"
  erb :"#{I18n.locale}/informacion-fiananciera", :layout => ("layouts/interior").to_sym
end
#
get '/:locale/administracion' do
  @titulo = "Administración "
  erb :"#{I18n.locale}/administracion", :layout => ("layouts/interior").to_sym
end
get '/:locale/analisis' do
  @titulo = "Análisis de la Administración"
  erb :"#{I18n.locale}/analisis", :layout => ("layouts/interior").to_sym
end
#
get '/:locale/estados' do
  @titulo = "Estados financieros auditados"
  erb :"#{I18n.locale}/estados-financieros", :layout => ("layouts/interior").to_sym
end
#
# get '/:locale/gobierno-corporativo' do
#   @titulo = "Gobierno corporativo"
#   erb :"#{I18n.locale}/vistas/gobierno-corporativo", :layout => ("global/bloques/content").to_sym
# end
