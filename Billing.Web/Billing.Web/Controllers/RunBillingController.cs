using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Billing.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RunBillingController : ControllerBase
    {
        private readonly ILogger<RunBillingController> _logger;

        public RunBillingController(ILogger<RunBillingController> logger)
        {
            _logger = logger;
        }
    }
}
