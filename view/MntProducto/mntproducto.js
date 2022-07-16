var tabla;

function init(){

}

$(document).ready(function(){
        tabla=$('#producto_data').dataTable({
            "aProcessing": true,
            "aServerSide": true,
            dom: 'Bfrtip',
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
                'pdf'
            ],
        "ajax":{
            url:'../../controller/producto.php?op=listar',
            type:"get",
            datatype:"json",
            error: function(e){
                console.log(e.responseTex);
            }

        },
        "bDEstroy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 10,
        "order": [[0,"asc"]],
        "language":{
            "sProcessing":    "Procesando...",
            "sLengthMenu":    "Mostrar _MENU_ registros",
            "sZeroRecords":   "No se encontraron resultados",
            "sEmptyTable":    "Ningún dato disponible en esta tabla",
            "sInfo":          "Mostrando un total de _TOTAL_ resgistros",
            "sInfoEmpty":     "Mostrando un total de 0 registros",
            "sInfoFiltered": "(Filtrado de un total de _MAX_ resgistros)",
            "sInfoPostFix":   "",
            "sSearch":         "Buscar",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "oPaginate":{
                "sFirst":      "Primero",
                "sLast":        "Ultimo",
                "sNext":       "Siguiente",
                "sPrevious":    "Anterior"
            },
            "oAria":{
                "sSortAscending": ":Activar para ordenar la columna de manera ascendente",
                "sSortDescending": "Activar para ordenar la columna de manera descendente"
            }
        }
        }).DataTable();

});

init();