RegisterCommand('open-preact', function(source)
    SendNUIMessage({
        type = 'showUI',
        data = {
            value = "FiveM Value"
        }
    })

    SetNuiFocus(true, true)

end, false)

RegisterNUICallback("close", function(data, cb)
    SetNuiFocus(false, false)
    cb({
        success = true
    })
end)

RegisterNUICallback("whoami", function(data, cb)
    cb('fivem client')
end)