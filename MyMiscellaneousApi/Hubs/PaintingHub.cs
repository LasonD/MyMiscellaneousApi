
using Microsoft.AspNetCore.SignalR;

namespace MyMiscellaneousApi.Hubs;

public class PaintingHub : Hub
{
    public Task PaintRequested(PaintPointRequest request)
    {
        return Clients.All.SendAsync("PaintAt", request);
    }
}

public record PaintPointRequest(int X, int Y);